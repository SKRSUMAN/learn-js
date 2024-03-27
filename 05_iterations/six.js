// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) =>{
//     console.log(item)
//     return item
// })

// console.log(values)


const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num)=> num >5)
// const newNums = myNums.filter( (num)=> {
//     return num >5
// })


// const newNums =[]

// myNums.forEach((num)=>
// {
//     if(num > 4)
//     {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre : 'Fiction', publish: 1981, edition : 2024},
    {title: 'Book Two', genre : 'Non-Fiction', publish: 1992, edition : 2008},
    {title: 'Book Three', genre : 'History', publish: 1999, edition : 2007},
    {title: 'Book Four', genre : 'Non-Fiction', publish: 1989, edition : 2010},
    {title: 'Book Five', genre : 'Science', publish: 2009, edition : 2014},
    {title: 'Book Six', genre : 'Fiction', publish: 1987, edition : 2010},
    {title: 'Book Seven', genre : 'History', publish: 1977, edition : 2007},
];


let useBooks = books.filter((bk) => bk.genre === 'History')

useBooks = books.filter((bk) => { 
    return bk.publish >= 1998 && bk.genre === 'History'
})

console.log(useBooks);
