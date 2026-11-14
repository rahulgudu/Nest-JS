import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Farzeen", age: 23 },
        { id: 2, name: "Ayesha", age: 22 }
    ];


    // GET
    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((student) => student.id === id);
        if (!student) {
            throw new Error("Student not found");
        }
        return student;
    }

    // POST
    createStudent(data: {
        name: string;
        age: number;

    }
    ) {
        const date = new Date();
        const time = date.getTime();

        const newStudent = {
            id: time,
            ...data
        }

        this.students.push(newStudent);
        return newStudent;
    }

    // PUT
    updateStudent(id: number, data: {
        name: string,
        age: number
    }) {
        const index = this.students.findIndex((s) => s.id === id);

        if (index === -1) {
            throw new Error("Student not found");
        }

        this.students[index] = { id, ...data }
        return this.students[index];
    }

    // PATCH
    patchStudent(id: number, data: Partial<{name: string; age: number}>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id: number) {
        const index = this.students.findIndex((s) => s.id === id);

        if(index === -1) throw new Error("Student not found");

        const deleted = this.students.splice(index, 1);

        return {message: "Student Deleted", student: deleted[0]};
    }
}
