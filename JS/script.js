// Покажите товары по следующему массиву

let issues = [{
    "title": "Верстка",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "21.10.23",
    "time": "14:31",
    "done": "Не выполнено"
}, {
    "title": "Задача",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "24.04.21",
    "time": '10:51',
    "done": "Готово"

}, {
    "title": "Примеры",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "27.10.23",
    "time": "12:11",
    "done": "В прогрессе"

}, {
    "title": "Разработка",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "15.02.23",
    "time": "8:31",
    "done": "Не выполнено"
}, {
    "title": "Тестирование",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "23.12.23",
    "time": "12:21",
    "done": "В прогрессе"
}, {
    "title": "Верстка 2",
    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, accusamus nesciunt aperiam repellat, nihil pariatur sunt aspernatur adipisci provident vel velit placeat distinctio ea repudiandae dolorem autem veniam perspiciatis debitis.",
    "date": "11.10.23",
    "time": "11:23",
    "done": "Готово"
} ]
const places = {
    table: document.querySelector('tbody'),
    container: document.querySelector('.container')
}
const typesBtn = document.querySelectorAll('.types button')
let main = document.querySelector('.main')
// let title = document.createElement('p')
// let descr = document.createElement('p')
// let date = document.createElement('p')
// let time = document.createElement('p')
// let done = document.createElement('p')
let inp_search = document.querySelector('.search')
// let t = document.querySelector('.tbody')
// let c = document.querySelector('.container')
let add = document.querySelector('.add')
let modal_add = document.querySelector('.modal_add')
let btn_close = document.querySelector('.close')
let form = document.querySelector('form')


reload(issues, places['table'], 'table')

typesBtn.forEach(btn => {
    btn.onclick = () => {
        let type = btn.dataset.type
        
        reload(issues, places[type], type)
        
    }
    
})

inp_search.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = issues.filter (item => {
        let title = item.title.toUpperCase().trim()
        if(title.includes(keyword)) {
            return item
        }
    })
    
    reload(filtered, places[i])
}

add.onclick = () => {
    modal_add.classList.add('show')
}
btn_close.onclick = () => {
    modal_add.classList.remove('show')
}

let inp_title = document.querySelector('.inp_title')
let inp_descr = document.querySelector('.inp_descr')
let inp_done = document.querySelector('select')
let time1 = document.querySelector('.time1') 
let time2 = document.querySelector('.time2')
form.onsubmit = (e) => {
    e.preventDefault();

    let issue = {
        title: inp_title.value,
        done: inp_done.value,
        time: time1.value.value,
        date: time2,
        description: inp_descr.value
    }


    issues.push(issue)
    reload(issues, places, type)
}


function reload(arr, place, type) {
    place.innerHTML = ""

    if(type === "container") {
        places['table'].parentElement.classList.add('hide')
        places['container'].classList.remove('hide')

        for (let item of arr) {
            let block = document.createElement('div')
            let title_block = document.createElement('h1')
            let descr_block = document.createElement('p')
            let time_div = document.createElement('div')
            let date_block = document.createElement('p')
            let time_block = document.createElement('p')
            let done_block = document.createElement('p')
    
            block.classList.add('block')
            descr_block.classList.add('descr_block')
            time_div.classList.add('time')

    
            title_block.innerHTML = item.title
            descr_block.innerHTML = item.description
            date_block.innerHTML = item.date
            time_block.innerHTML = item.time
            done_block.innerHTML = item.done
    
            block.append(title_block, descr_block, time_div, done_block)
            time_div.append(date_block, time_block)
            place.append(block)
            if (item.done === "В прогрессе") {
                done_block.style.color = "blue"
            } else if (item.done === "Не выполнено") {
                done_block.style.color = "red"
            } else {
                done_block.style.color = "black"
            }
            block.onclick = () => {
                modal_add.classList.add('show')
                inp_title.setAttribute('placeholder', `change: ${item.title}`)
                inp_descr.setAttribute('placeholder', `change: ${item.description}`)
                time1.setAttribute('placeholder', `change: ${item.time}`)
                time2.setAttribute('placeholder', `change: ${item.date}`)
                inp_done.setAttribute('placeholder', `change: ${item.done}`)
            
                form.onsubmit = (e) => {
                    e.preventDefault()
            
                    item.title = inp_title.value
                    item.time = time1.value
                    item.date = time2.value
                    item.done = inp_done.value
                    item.description = inp_descr.value
            
                    title_block.innerHTML = item.title
                    descr_block.innerHTML = item.description
                    date_block.innerHTML = item.date
                    time_block.innerHTML = item.time
                    done_block.innerHTML = item.done
            
                    form.reset()
                    modal_add.classList.remove('show')
                } }  
        }  
        return
    }

    places['table'].parentElement.classList.remove('hide')
    places['container'].classList.add('hide')

    
    for (let item of arr) {

        let tr_tbody = document.createElement('tr')
        let titletable = document.createElement('td')
        let descriptiontable = document.createElement('td')
        let datetable = document.createElement('td')
        let timetable = document.createElement('td')
        let donetable = document.createElement('td')
    
        titletable.innerHTML = item.title
        descriptiontable.innerHTML = item.description
        datetable.innerHTML = item.date
        timetable.innerHTML = item.time
        donetable.innerHTML = item.done
    
        place.append(tr_tbody)
        tr_tbody.append(titletable, descriptiontable, datetable, timetable, donetable)
        
    
        if (item.done === "В прогрессе") {
            donetable.style.color = "blue"
        } else if (item.done === "Не выполнено") {
            donetable.style.color = "red"
        } else {
            donetable.style.color = "black"
        }
        tr_tbody.onclick = () => {
            modal_add.classList.add('show')
            inp_title.setAttribute('placeholder', `change: ${item.title}`)
            inp_descr.setAttribute('placeholder', `change: ${item.description}`)
            time1.setAttribute('placeholder', `change: ${item.time}`)
            time2.setAttribute('placeholder', `change: ${item.date}`)
            inp_done.setAttribute('placeholder', `change: ${item.done}`)
        
            form.onsubmit = (e) => {
                e.preventDefault()
        
                item.title = inp_title.value
                item.time = time1.value
                item.date = time2.value
                item.done = inp_done.value
                item.description = inp_descr.value
        
                titletable.innerHTML = item.title
                descriptiontable.innerHTML = item.description
                datetable.innerHTML = item.date
                timetable.innerHTML = item.time
                donetable.innerHTML = item.done
        
                form.reset()
                modal_add.classList.remove('show')
            } }  
        }
}

// block.onclick = () => {
//     modal_add.classList.add('show')
//     inp_title.setAttribute('placeholder', `change: ${item.title}`)

//     modal_form.onsubmit = (e) => {
//         e.preventDefault()

//         item.title = inp_title.value
//         item.time = time1
//         item.date = time2
//         item.done = inp_done
//         item.description = inp_descr

//         title_block.innerHTML = item.title
//         descr_block.innerHTML = item.description
//         date_block.innerHTML = item.date
//         time_block.innerHTML = item.time
//         done_block.innerHTML = item.done

//         modal_form.reset()
//         modal.classList.remove('show')
//     } }