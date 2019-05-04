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
const showBestStaffMembers = (staffArray) => {

}


let staffMembersObjects = [];
btn.addEventListener('click', ()=> {
    
    let staffMembers = document.querySelectorAll('div[id^="pracownik"]');

    // use information in div to create a object
    staffMembers.forEach((staffMemberDiv)=> {
        let staffMemberObject = new staffMember(
                staffMemberDiv.children[0].innerText,
                Number(staffMemberDiv.children[1].value),
                Number(staffMemberDiv.children[2].value)
        );
        
        // set red for slackers
        if(staffMemberObject.isSlackingOff){
            staffMemberDiv.classList.add('slacking__staff__member')
        }

        // calculate the pay and update the DOM with this information
        staffMemberDiv.children[3].innerText = staffMemberObject.calculatePay();

        // update the array of objects with newly created object
        staffMembersObjects.push(staffMemberObject);
    })

    console.log(staffMembersObjects)
})


