class TodoItem {

  static get CREATED() {
    return 'todo-item-created';
  }

  constructor(observable, props) {
    this.observable = observable;
    this.props = props;
    this.id = `input_${Math.random().toString()}`;

    console.log(this)
    this.observable.publish(TodoItem.CREATED, this);
  }

  render() {
    const {isChecked, text} = this.props;

    const trItem = document.createElement('tr');

    const tdDate = document.createElement('td');
    tdDate.classList.add('date');
    const tdStatus = document.createElement('td');
    tdDate.classList.add('status');
    const tdText = document.createElement('td');

    tdDate.textContent = this.date();

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', this.id);
    if (isChecked) {
      input.checked = true;
    }

    const label = document.createElement('label');
    label.setAttribute('for', this.id);

    tdStatus.appendChild(input);
    tdStatus.appendChild(label);

    tdText.textContent = text;

    trItem.appendChild(tdDate);
    trItem.appendChild(tdStatus);
    trItem.appendChild(tdText);

    return trItem;
  }

  date() {
    const date = new Date()
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let reformat = [month, day, hours, minutes, seconds];
    [month, day, hours, minutes, seconds] = reformat.map( item => item < 10 ? '0' + item : item);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

}
