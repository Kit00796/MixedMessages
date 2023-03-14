const dinner = {

    style: ['Spanish', 'Chinese', 'Italian', 'Thai', 'Indian', 'Mediterranean' ],
    protein: ['chicken', 'beef', 'pork', 'tofu', 'fish', 'egg'],
    veg: ['broccoli', 'onion', 'zucchini', 'tomato', 'corn', 'potato'],
    body: ['rice', 'pasta', 'greens', 'bread', 'broth']

};

const randomNum = num => {

    return Math.floor(Math.random() * num);

};

const buildDinner = () => {
    
    let dinnerIdea = [];

    for (let arr in dinner){

        let mixUp = randomNum(dinner[arr].length)

        switch (arr){
            case 'style':
                dinnerIdea.push(`Tonight for dinner, you should have ${dinner[arr][mixUp]}`);
                break;
            case 'protein':
                dinnerIdea.push(` ${dinner[arr][mixUp]}`);
                break;
            case 'veg':
                dinnerIdea.push(` and ${dinner[arr][mixUp]}`);
                break;
            case 'body':
                dinnerIdea.push(` over ${dinner[arr][mixUp]}`);
                break;
            default: 
                'NOTHING';
                break;
        }
    };

    return dinnerIdea.join();

};

console.log(buildDinner());