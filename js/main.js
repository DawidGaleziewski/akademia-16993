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


btn.addEventListener('click', ()=> {
    let staffMembersObjects = [];
    let staffMembers = document.querySelectorAll('div[id^="pracownik"]');

    staffMembers.forEach((staffMemberDiv)=> {
        let staffMemberObject = new staffMember(
                staffMemberDiv.children[0].innerText,
                staffMemberDiv.children[1].value,
                staffMemberDiv.children[2].value
            );
        staffMembersObjects.push(staffMemberObject);
        
        // set red for slackers
        if(staffMemberObject.isSlackingOff){
            staffMemberDiv.classList.add('slacking__staff__member')
        }

        // calculate the pay
        staffMemberDiv.children[3].innerText = staffMemberObject.calculatePay();
    })

    console.log(staffMembersObjects)
})