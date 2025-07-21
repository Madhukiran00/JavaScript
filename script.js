


// class Students{
//     Constructor(name,branch){
//         this.name=name;
//         this.branch=branch;
//     }
//     getInfo(){
//         return `my name is ${this.name} and my branch is ${this.branch}`;
//     }
// }


// let s1=new Students("madhu","EEE");

// console.log(s1.getInfo())





// class Students{
//     constructor(name,branch){
//         this.name=name;
//         this.branch=branch;
//     }


//     getInfo(){
//         return `my name ${this.name} and ${this.branch}`

//     }

//     change_data(){
//         this.name="kiran"
//         this.branch="CSE"

//     }
// }

// let s1=new Students("madhu","EEE")

// console.log(s1.getInfo())

// s1.change_data()
// console.log(s1.getInfo())




// class Students{
//     static college_name="college name"

//     constructor(name,branch){
//         this.name=name;
//         this.branch=branch;
//     }


//     getInfo(){
//         return `my name ${this.name} and ${this.branch} and college ${Students.college_name}`

//     }

// }

// let s1=new Students("madhu","EEE")
// console.log(s1.getInfo())


class Students{
    static college_name="college name"

    constructor(name,branch){
        this.name=name;
        this.branch=branch;
    }


    getInfo(){
        return `my name ${this.name} and ${this.branch} and college ${Students.college_name}`

    }
    change_college(){
        college_name ="new college"
    }

}

let s1=new Students("madhu","EEE")
console.log(s1.getInfo())






