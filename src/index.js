import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MacroDateInput from './macro-date-input';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';

const isBz = (v) => {
	const fmt = "MM/DD/YYYY";
	let holidays = {};
	holidays["01/01/2019"] = moment("01/01/2019", fmt);
	holidays["01/14/2019"] = moment("01/14/2019", fmt);
	holidays["02/11/2019"] = moment("02/11/2019", fmt);
	holidays["03/21/2019"] = moment("03/21/2019", fmt);
	holidays["04/29/2019"] = moment("04/29/2019", fmt);
	holidays["04/30/2019"] = moment("04/30/2019", fmt);
	holidays["05/01/2019"] = moment("05/01/2019", fmt);
	holidays["05/02/2019"] = moment("05/02/2019", fmt);
	holidays["05/03/2019"] = moment("05/03/2019", fmt);
	holidays["05/06/2019"] = moment("05/06/2019", fmt);
	holidays["07/15/2019"] = moment("07/15/2019", fmt);
	holidays["08/12/2019"] = moment("08/12/2019", fmt);
	holidays["09/16/2019"] = moment("09/16/2019", fmt);
	holidays["09/23/2019"] = moment("09/23/2019", fmt);
	holidays["10/14/2019"] = moment("10/14/2019", fmt);
	holidays["10/22/2019"] = moment("10/22/2019", fmt);
	holidays["11/04/2019"] = moment("11/04/2019", fmt);
	holidays["11/23/2019"] = moment("11/23/2019", fmt);

	if(moment.isMoment(v)){
		if(v.isoWeekday() === 7 || v.isoWeekday() === 6){
			return false;
		}
		if(holidays[v.format(fmt)]){
			return false;
		}
	}
	return true;
}

const title = (<div className="title">Macro Date Input</div>);
const sample = (<div className="sample"><MacroDateInput isBizDate={isBz} defaultValue="04/15/2019" baseDate="04/15/2019" /></div>);
const descr = (<div className="descr">
This function resolves a macro if it contains, for example;
<li>2d -> 2 days</li>
<li>2bd -> 2 bisiness days</li>
<li>2m -> the month after next month</li>
<li>2m2tu -> the second Tuesday of the month after next month</li>
<li>2m2 -> the second day of the month after next month</li>
<li>1m31 -> the last day of the next month</li>

Also it accepts noAdj option. The default behavior is it escapes holidays, Saturday or Sunday.
This option disable this default behavior. For example, "2m2tu noAdj".
</div>);

ReactDOM.render(<div className="main">{title}{sample}{descr}</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
