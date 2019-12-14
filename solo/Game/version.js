const randomVersion = true;
const randomInt=function(radius,base=radius){
    return parseInt(Math.random()*(radius*2+1)+base-radius);
};
const randomRate=function(radius,base=radius){
    return Math.random()*radius*2+base-radius;
};
module.exports = function(randomOption) {
    if(randomVersion)
        return {
        version:'1.0.0',
            players:[
            {
                name: 'A',
                hp: randomOption!==0?1000:randomInt(200, 1000),
                operations: [
                    {
                        name: 'attack',
                        base: randomOption!==1?100:randomInt(20, 100),
                        rate: randomOption!==2?0.2:randomRate(0.1,0.2),
                        most: randomOption!==3?200:randomInt(40, 200)
                    },
                    {
                        name: 'slam',
                        base: randomOption!==4?200:randomInt(50, 200),
                        rate: randomOption!==5?0.5:randomRate(0.2,0.5)
                    },
                    {
                        name: 'defend'
                    }
                ]
            },
            {
                name: 'B',
                hp: randomOption!==6?1000:randomInt(200, 1000),
                operations: [
                    {
                        name: 'attack',
                        base: randomOption!==7?120:randomInt(20, 120),
                        rate: randomOption!==8?0.2:randomRate(0.1,0.2),
                        most: randomOption!==9?150:randomInt(30, 150)
                    },
                    {
                        name: 'slam',
                        base: randomOption!==10?400:randomInt(100, 400),
                        rate: randomOption!==11?0.25:randomRate(0.1,0.25)
                    },
                    {
                        name: 'defend'
                    }
                ]
            },
                {
                    name: 'C',
                    hp: randomOption!==12?500:randomInt(100, 500),
                    operations: [
                        {
                            name: 'attack',
                            base: randomOption!==13?200:randomInt(50, 200),
                            rate: randomOption!==14?0.2:randomRate(0.1,0.2),
                            most: randomOption!==15?400:randomInt(100, 400)
                        },
                        {
                            name: 'slam',
                            base: randomOption!==16?400:randomInt(100, 400),
                            rate: randomOption!==17?0.7:randomRate(0.2,0.7)
                        },
                        {
                            name: 'defend'
                        }
                    ]
                },
        ]
    };
    else return {
        version:'1.0.0',
        players:[
            {
                name: 'A',
                hp: 100,
                operations: [
                    {
                        name: 'attack',
                        base: 10,
                        rate: 0.2,
                        most: 20
                    },
                    {
                        name: 'slam',
                        base: 20,
                        rate: 0.5
                    },
                    {
                        name: 'defend'
                    }
                ]
            },
            {
                name: 'B',
                hp: 100,
                operations: [
                    {
                        name: 'attack',
                        base: 12,
                        rate: 0.2,
                        most: 15
                    },
                    {
                        name: 'slam',
                        base: 40,
                        rate: 0.25
                    },
                    {
                        name: 'defend'
                    }
                ]
            },
            {
                name: 'C',
                hp: 50,
                operations: [
                    {
                        name: 'attack',
                        base: 20,
                        rate: 0.2,
                        most: 40
                    },
                    {
                        name: 'slam',
                        base: 40,
                        rate: 0.7
                    },
                    {
                        name: 'defend'
                    }
                ]
            }
        ]
    }
};