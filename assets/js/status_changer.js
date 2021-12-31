
function tristate(control) {
    var Data = [
        { status: 'unchecked', value: '\u2B1C' },
        { status: 'x', value: '\u274c' },
        { status: 'question', value: '\u2753' },
        { status: 'checked', value: '\u2705' }
    ]

    var index = Data.map(function (e) { return e.value; }).indexOf(control.value);
    index ++
    if (index >= Data.length) {
        index = 0
    }
    control.value = Data[index].value
}