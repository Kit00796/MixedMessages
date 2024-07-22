const dinner = {

    style: ['Spanish', 'Chinese', 'Italian', 'Thai', 'Indian', 'Mediterranean', 'American', 'Southern', 'German', 'Japanese', 'African'],
    cookStyle: ['pan-seared', 'roasted', 'pan-fried', 'deepfried', 'baked', 'grilled', 'smoked', 'braised', 'stewed', 'boiled', ],
    protein: ['chicken', 'beef', 'pork', 'tofu', 'white fish', 'Salmon', 'crab', 'shrimp', 'shellfish', 'egg', 'steak'],
    veg: ['broccoli', 'onion', 'zucchini', 'tomato', 'corn', 'potato', 'sweet potato', 'shallots', 'asparagus', 'cauliflower', 'cabbage', 'carrots', 'cucumbers', 'pumpkin', 'leeks', 'celery'],
    veg2: ['broccoli', 'onion', 'zucchini', 'tomato', 'corn', 'potato', 'sweet potato', 'shallots', 'asparagus', 'cauliflower', 'cabbage', 'carrots', 'cucumbers', 'pumpkin', 'leeks', 'celery'],
    body: ['rice', 'couscous', 'quinoa', 'whole grains', 'pasta', 'polenta', 'greens', 'bread', 'broth'],
    flavorVeg: ['garlic',  'tumeric', 'ginger', 'lemongrass', ]

};

const randomNum = num => {

    return Math.floor(Math.random() * num);

};

const buildDinner = () => {
    
    let dinnerIdea = ['Tonight for dinner you should have'];

    for (let arr in dinner){

        let mixUp = randomNum(dinner[arr].length)

        switch (arr){
            case 'style':
                dinnerIdea.push(`${dinner[arr][mixUp]} style`);
                break;
            case 'cookStyle':
                dinnerIdea.push(`${dinner[arr][mixUp]}`);
                break;
            case 'protein':
                dinnerIdea.push(`${dinner[arr][mixUp]}`);
                break;
            case 'veg':
                dinnerIdea.push(`with ${dinner[arr][mixUp]}`);
                break;
            case 'veg2':
                dinnerIdea.push(`and ${dinner[arr][mixUp]}`);
                break;
            case 'body':
                dinnerIdea.push(`over ${dinner[arr][mixUp]}.`);
                break;
            default: 
                'NOTHING';
                break;
        }
    };

    return dinnerIdea.join(' ');

};

console.log(buildDinner());