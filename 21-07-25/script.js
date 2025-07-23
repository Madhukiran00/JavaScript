
// 1) Instance variables
// 2) Static variables
// 3) Private variables 

class Students{
    static college="GPREC"
    #mobile_num="9876543210"
    constructor(name,branch){
        this.name=name;
        this.branch=branch;
    }

    getInfo(){
        console.log(this.#mobile_num)
        return `Name:${this.name} , Branch:${this.branch} and College:${Students.college} `
    }
    
}

let std1=new Students("Madhu","EEE")

console.log(std1.getInfo())
console.log(std1.#mobile_num)






