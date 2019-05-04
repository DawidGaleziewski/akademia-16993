// Button for adding even listiner to
let btn = document.getElementById('oblicz')

// Class for staff memebers and their info
class staffMember {
    constructor(name, hoursWorked, payPerHour){
        this.name = name;
        this.hoursWorked = hoursWorked;
        this.payPerHour = payPerHour;
        this.isSlackingOff = (this.hoursWorked <= 100)
    }

    calculatePay() {
        if(this.hoursWorked <= 160){
            return this.hoursWorked * this.payPerHour;
        } else {
            return ((160 * this.payPerHour) + (this.hoursWorked - 160) * (this.payPerHour * 2))
        }
    }
}

// taking out functions from event listiner for code readability

// transform div information into a object using staffMember class
const createStaffMemberObject = (staffMemberDiv)=>{
    let staffMemberObject = new staffMember(
        staffMemberDiv.children[0].innerText,
        Number(staffMemberDiv.children[1].value),
        Number(staffMemberDiv.children[2].value)
    );

    return staffMemberObject;
}


// Sort objects of staff members by their hours worked
const sortByHoursWorked = (staffArray) => {
    staffArray.sort((member1, member2) => {
        if (member1.hoursWorked < member2.hoursWorked){
            return 1
        } else if (member1.hoursWorked > member2.hoursWorked){
            return -1
        } else {
            return 0
        }
    })
    return staffArray
}

// create a list with best workers
const showBestStaffMembers = (staffArray) => {

}



btn.addEventListener('click', ()=> {
    // array for keeping information on all staff members
    let staffMembersObjects = [];
    // eeach div of every staff member
    let staffMembers = document.querySelectorAll('div[id^="pracownik"]');

    // Loop for each staff member node
    staffMembers.forEach((staffMemberDiv)=> {
        // use information in div to create a object
        let staffMemberObject = createStaffMemberObject(staffMemberDiv);
        
        // set red if he is slacking off
        if(staffMemberObject.isSlackingOff){
            staffMemberDiv.classList.add('slacking__staff__member')
        }

        // calculate the pay and update the DOM with this information
        staffMemberDiv.children[3].innerText = staffMemberObject.calculatePay();

        // update the array of objects with newly created object
        staffMembersObjects.push(staffMemberObject);
    })

    // sort the array of staff members to establish who is the best
    sortByHoursWorked(staffMembersObjects);

    console.log(staffMembersObjects);
})


