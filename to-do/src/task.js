class Task {
    constructor(title, description, dueDate, priority) {
        this._title = title,
        this._description = description,
        this._dueDate = dueDate,
        this._priority = priority
    }

    get title() {
        return this._title
    }

    set title(newTitle) {
        this._title = newTitle
    }

    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }

    get dueDate() {
        return this._dueDate
    }

    set dueDate(newDate) {
        this._dueDate = newDate
    }

    get priority() {
        return this._priority
    }

    set priority(newPriority) {
        this._priority = newPriority
    }
}

export default Task