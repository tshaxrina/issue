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
let main = document.querySelector('.main')
let table = document.querySelector('.table')
let cell = document.querySelector('.cell')
let title = document.createElement('p')
let descr = document.createElement('p')
let date = document.createElement('p')
let time = document.createElement('p')
let done = document.createElement('p')
let inp_search = document.querySelector('.search')
let t = document.querySelector('.t')
let add = document.querySelector('.add')
let modal_add = document.querySelector('.modal_add')
let btn_close = document.querySelector('.close')
let form = document.querySelector('form')

add.onclick = () => {
    modal_add.classList.add('show')
}
btn_close.onclick = () => {
    modal_add.classList.remove('show')
}

table.onclick = () => {
    table.classList.add('blue')
    cell.classList.remove('blue')
    if (table.classList.contains('blue')) {
        reload_table(issues)
    } else {
        reload(issues)
    }
}
cell.onclick = () => {
    cell.classList.add('blue')
    table.classList.remove('blue')
    if(cell.classList.contains('blue')) {
        reload(issues)
    } else {
        reload_table(issues)
    }
}

let inp_title = document.querySelector('.inp_title')
let inp_descr = document.querySelector('.inp_descr')
let inp_done = document.querySelector('.inp_done')
let time1 = document.querySelector('.time1') 
let time2 = document.querySelector('.time2')

form.onsubmit = (e) => {
    e.preventDefault();

    let issue = {
        title: inp_title.value,
        done: inp_done.value,
        time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
        description: inp_descr.value
    }


    issues.push(issue)

    reload(issues)
    reload_table(issues)
}

function reload(arr) {
    main.innerHTML = ""

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
        main.classList.add ('plitka')

        title_block.innerHTML = item.title
        descr_block.innerHTML = item.description
        date_block.innerHTML = item.date
        time_block.innerHTML = item.time
        done_block.innerHTML = item.done

        block.append(title_block, descr_block, time_div, done_block)
        time_div.append(date_block, time_block)
        main.append(block)
        if (item.done === "В прогрессе") {
            done_block.style.color = "blue"
        } else if (item.done === "Не выполнено") {
            done_block.style.color = "red"
        } else {
            done_block.style.color = "black"
        }

        // block.ondblclick = () => {
        //     modal_add.classList.add('show')
        //     // title_block.innerHTML = `Title: ${todo.title}`
        //     modal_inp.setAttribute('placeholder', `change: ${todo.title}`)

        //     modal_form.onsubmit = (e) => {
        //         e.preventDefault()

        //         todo.title = modal_inp.value
        //         todo.time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()

        //         title_text.innerHTML = todo.title

        //         modal_form.reset()
        //         modal.classList.remove('show')
        //     }
            
        // }
    }
    
}

inp_search.onkeyup = (event) => {
    const keyword = event.target.value.toUpperCase().trim()

    const filtered = issues.filter (item => {
        let title = item.title.toUpperCase().trim()
        if(title.includes(keyword)) {
            return item
        }
    })
    reload(filtered, main)
}

function reload_table(array) {
    t.innerHTML = ""
    let thead = document.createElement('thead')
    let tr_thead = document.createElement('tr')
    let title_table = document.createElement('th')
    let description_table = document.createElement('th')
    let date_table = document.createElement('th')
    let time_table = document.createElement('th')
    let done_table = document.createElement('th')

    title_table.innerHTML = "Заголовок задачи"
    description_table.innerHTML = "Описание задачи"
    date_table.innerHTML = "Дата"
    time_table.innerHTML = "Время"
    done_table.innerHTML = "Выполнено"

    t.append(thead)
    thead.append(tr_thead)
    tr_thead.append(title_table, description_table, date_table, time_table, done_table)

    for (let i of array) {
    let tdody = document.createElement('tbody')
    let tr_tbody = document.createElement('tr')
    let titletable = document.createElement('td')
    let descriptiontable = document.createElement('td')
    let datetable = document.createElement('td')
    let timetable = document.createElement('td')
    let donetable = document.createElement('td')

    titletable.innerHTML = i.title
    descriptiontable.innerHTML = i.description
    datetable.innerHTML = i.date
    timetable.innerHTML = i.time
    donetable.innerHTML = i.done

    tdody.append(tr_tbody)
    tr_tbody.append(titletable, descriptiontable, datetable, timetable, donetable)
    t.append(tdody)

    if (i.done === "В прогрессе") {
        donetable.style.color = "blue"
    } else if (i.done === "Не выполнено") {
        donetable.style.color = "red"
    } else {
        donetable.style.color = "black"
    }
    }
}