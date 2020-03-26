let list1 = [7, 3, 3, 1, 4, 2, 9, 8];
let list2 = [8, 6, 7, 5, 3, 0, 9, 13, 37, 73, 31, 86, 75, 30, 9, 9, 9, 867, 530, 99, 1337, 143, 313, 867, 5309, 8675309, 13337, 133337, 133, 337, 42, 42];

function quickSort(array){
    if (array.length < 2){
        return array;
    }
    let len = array.length;
    let pivotIndex = Math.floor(Math.random() * len);
    let pivotValue = array.splice(pivotIndex,1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < len - 1; i++) {    
        if(array[i] <= pivotValue){
            left.push(array[i]);
        } else{
            right.push(array[i]);
        }
    }
    return [...quickSort(left),pivotValue,...quickSort(right)];
}

function helper(){
    if(event.target.id == 'sortList1'){
        sortedValues.textContent = quickSort(list1.slice());
    } else if(event.target.id == 'sortList2'){
        sortedValues.textContent = quickSort(list2.slice())
    }
}

let originalValues1 = document.getElementById("original1");
let values1 = document.createElement('div');
originalValues1.appendChild(values1).className = 'new-div';
values1.textContent = `${list1}`;
let originalValues2= document.getElementById("original2");
let values2 = document.createElement('div');
originalValues2.appendChild(values2).className = 'new-div';
values2.textContent = `${list2}`;

let click1 = sortList1.addEventListener('click', helper);
let click2 = sortList2.addEventListener('click', helper);

let sortedResults = document.getElementById('sorted');
let sortedValues = document.createElement('div');
sortedResults.appendChild(sortedValues);

