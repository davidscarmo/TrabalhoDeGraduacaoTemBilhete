import { Request, Response } from "express";

import db from "../database/connection";

interface ClassIdItemProps {
  id: number;
  student_id: number;
  class_id: number;
}
export default class ScrapsController {
  async index(request: Request, response: Response) {
    const scraps = await db("scraps")
      .select("scraps.*", "students.name")
      .innerJoin(
        "studentClass",
        "scraps.studentClass_id",
        "=",
        "studentClass.id"
      )
      .innerJoin("students", "studentClass.student_id", "=", "students.id")
      .orderBy("scrapsDate", "desc");
    // .innerJoin('classes', 'studentClass.class_id', '=', 'classes.id')
    // .innerJoin('students', 'studentClass.student_id', '=', 'students.id')
    return response.status(200).json(scraps);
  }

  async scrapByRa(request: Request, response: Response) {
    const scrapData = request.query;
    console.log(scrapData);
    try {
      const studentIdFound = await db("students")
        .select("id")
        .where("ra", "=", `${scrapData.id}`); //after add RA by device storage
      const student_id = studentIdFound[0].id;
      const studentClassId = await db("studentClass")
        .select("id")
        .where("student_id", "=", `${student_id}`);

      /* let wheresArray = ['']; 
             studentClassId.forEach(item => 
                {  
                  wheresArray.push(`.where('studentClass_id', '=', ${item.id})`); 
                }); 
    
            let wheres = wheresArray.join(''); 
    
            console.log(wheres);'
        */
      // const scraps =  await db('scraps').select('*').where('studentClass_id', '=', studentClassId[studentClassId.length -1].id).orderBy('id', 'desc') ; //temporary solution

      const studentClassArray_ids = studentClassId.map((item) => {
        return item.id;
      });
      const scraps = await db("scraps")
        .select("*")
        .whereIn("studentClass_id", studentClassArray_ids)
        .orderBy("id", "desc");

      return response.json(scraps);
    } catch (err) {
      return response.status(400).send(err);
    }
  }

  async create(request: Request, response: Response) {
    const { ra, subject, message } = request.body;

    try {
      const studentIdFound = await db("students")
        .select("id")
        .where("ra", "=", `${ra}`);
      const student_id = studentIdFound[0].id;

      const classIdFound = await db("studentClass")
        .select("class_id")
        .where("student_id", "=", `${student_id}`)
        .join("classes", "studentClass.class_id", "=", "classes.id")
        .where("year", "=", `2021`);

      const class_id = classIdFound[0].class_id;

      const studentClassId = await db("studentClass")
        .select("id")
        .where("student_id", "=", `${student_id}`)
        .where("class_id", "=", `${class_id}`);

      const studentClass_id = studentClassId[0].id;

      await db("scraps").insert({
        subject,
        message,
        studentClass_id,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).send(err);
    }
  }
  async editScrapStatus(request: Request, response: Response) {
    const scrapId = request.body;
    console.log(scrapId.params.id);
    try {
      await db("scraps").where("id", "=", `${scrapId.params.id}`).update({
        status: "yes",
      });

      return response.status(200).send();
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
