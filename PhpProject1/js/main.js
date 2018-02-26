/*Canvas Code assistance appreciated thus:
 * “From Canvas Pocket Reference by David
 *  Flanagan (O’Reilly). Copyright 2011 David Flanagan,
 *  978-1-449-39680-0.”
 * 
 * 
 */

//ViewGenRpt Vars
var vArrOriginalCursors = new Array(2);
var viewGenCurrRow = 0;
var vSelectedRow = 0;
var vRowClicked = 0;




var DelMeCntr = 0;
var DelMe = 0;

//constant declarations for keyboard
var KBD_SPL_CAPSLOCK = 36;
var KBD_SPL_SHIFT = 37;
var KBD_SPL_SPACE = 38;
var KBD_SPL_BACKSPACE = 39;

var KBD_KEY_INACTIVE = 0;
var KBD_KEY_INVALID = 0;
var KBD_KEY_ACTIVE = 1;
var KBD_KEY_VALID = 1;

//Constant declarations
const ETPARAMENTRY_TESTPRESSURE_NEW = 1;
const ETPARAMENTRY_OPEN_ROTATION_NEW = 2;
const ETPARAMENTRY_CLOSING_TORQUE_NEW = 3;
const ETPARAMENTRY_END_TORQUE_NEW = 8;
const ETPARAMENTRY_TEST_CYCLES_NEW = 4;
const ETPARAMENTRY_TEST_ID_NEW = 5;
const ETPARAMENTRY_TEST_CONDUCTOR_NEW = 6;
//var ETPARAMENTRY_PARAM_ENTRY_COMPLETE = 7;
var ETPARAMENTRY_AWAIT_USER_ACCEPTANCE = 7;

//Constant declarations for min and max values for param entry
var ETPARAMENTRY_TESTPRESSURE_MIN = 15;
var ETPARAMENTRY_TESTPRESSURE_MAX = 400;
var ETPARAMENTRY_OPEN_ROTATION_MIN = 20;
var ETPARAMENTRY_OPEN_ROTATION_MAX = 1440;
var ETPARAMENTRY_CLOSING_TORQUE_MIN = 3.5;
var ETPARAMENTRY_CLOSING_TORQUE_MAX = 33;
var ETSET_CYCLES_MIN = 1;
var ETSET_CYCLES_MAX = 5000;
var ETParamEntryStatus = ETPARAMENTRY_TESTPRESSURE_NEW;


//Constant Parameters for Endurance Test Status
var ETTEST_UNKNOWN = 11;
var ETTEST_INIT_BEGIN = 22;
var ETTEST_INIT_DEPRESSURE_BEGIN = 33;
var ETTEST_INIT_DEPRESSURE_AWAIT = 44;
var ETTEST_INIT_DEPRESSURE_COMPLETE = 55;
var ETTEST_PREPARE_TEST_CLOSE_OUTLET = 66;
var ETTEST_PREPARE_TEST_APPLY_INLET = 77;
var ETTEST_PREPARE_TEST_AWAIT_INLET_APPLICATION_DLY = 78;
var ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_VALID_ACTION = 79;
var ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_INVALID_ACTION = 80;
var ETTEST_PREPARE_TEST_TORQUE_CAL = 81;
var ETTEST_PREPARE_TEST_TORQUE_MONITOR_SRVO_BEGIN = 82;
var ETTEST_PREPARE_TEST_TORQUE_MONITOR = 83;
var ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE = 84;
var ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_CMD_ACC = 85;
var ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_MONITOR = 86;
var ETTEST_PREPARE_TEST_RETURN_TO_SRC = 86;
//var ETTEST_PREPARE_CHECK_VALVE_OPEN = 88;
var ETTEST_EXEC_CLOSE_VALVE_BEGIN = 99;
var ETTEST_EXEC_MONITOR_VALVE_CLOSE = 110;
var ETTEST_EXEC_VALVE_CLOSE_ERROR_ACTION = 120;
var ETTEST_EXEC_VALVE_CLOSE_STD_ACTION = 130;
var ETTEST_EXEC_VALVE_CLOSE_MONITOR_BEGIN = 700;
var ETTEST_EXEC_VALVE_CLOSE_MONITOR = 131;
var ETTEST_EXEC_INCH_CMD = 132;
var ETTEST_EXEC_INCH_TQ_MONITOR = 133;
var ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_BEGIN = 140;
var ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_MONITOR = 150;
var ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_INTERVAL_COMP_ACTION = 160;
var ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_NORMAL_ACTION = 170;
var ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_ERROR_ACTION = 180;
var ETTEST_EXEC_DISCHARGE_BEGIN = 190;
var ETTEST_EXEC_DISCHARGE_INTERVAL_AWAIT = 200;
var ETTEST_EXEC_DISCHARGE_INTERVAL_COMPLETE = 210;
var ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_BEGIN = 220;
var ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_MONITOR = 230;
var ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_INTERVAL_COMP_ACTION = 240;
var ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_NORMAL_ACTION = 250;
var ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_ERROR_ACTION = 260;
var ETTEST_EXEC_OPEN_VALVE_BEGIN = 270;
var ETTEST_EXEC_VALVE_OPEN = 271;
var ETTEST_EXEC_MONITOR_VALVE_OPEN_BEGIN = 275;
var ETTEST_EXEC_MONITOR_VALVE_OPEN = 280;
var ETTEST_EXEC_VALVE_OPEN_ERROR_ACTION = 290;
var ETTEST_EXEC_VALVE_OPEN_STD_ACTION = 300;
var ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_BEGIN = 310;
var ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_MONITOR = 320;
var ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_INTERVAL_COMP_ACTION = 330;
var ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_NORMAL_ACTION = 340;
var ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_ERROR_ACTION = 350;
var ETTEST_EMERGENCY_STOP_BEGIN = 360;
var ETTEST_EMERGENCY_STOP_MONITOR = 370;
var ETTEST_EMERGENCY_STOP_COMPLETE = 380;
var ETTEST_CYCLE_COMPLETE_BEGIN = 390;
var ETTEST_CYCLE_COMPLETE_MONITOR = 400;
var ETTEST_CYCLE_COMPLETE_COMPLETE = 410;





var EnduranceTestExecuteCurrrentStat = 11;

var ET_InletVentingValveDesiredStatus = 0;
var ET_InletIsolatingValveDesiredStatus = 0;
var ET_OutletVentingValveDesiredStatus = 0;

var ET_InletVentingValveActualStatus = 0;
var ET_InletIsolatingValveActualStatus = 0;
var ET_OutletVentingValveActualStatus = 0;

var ET_INLET_PRESSURE_CURRENTX1000 = 0;
var ET_OUTLET_PRESSURE_CURRENTX1000 = 0;

var ET_Inlet_Pressure = 0;
var ET_Outlet_Pressure = 0;
var ET_Tq = 0;
var ET_SampleCntr = 0;
var ET_Prev_Inlet_Pressure = 0;
var ET_Prev_Outlet_Pressure = 0;


var SERVO_CMD_STAT_UNKNOWN = 0;
var SERVO_CMD_STAT_LOADED = 1;
var SERVO_CMD_STAT_ACCEPTED = 2;
var SERVO_CMD_STAT_COMPLETED = 3;
var SERVO_CMD_STAT_ERR = 4;



var PRESSURE_OK = 0;
var PRESSURE_LESS = -1;
var PRESSURE_MORE = 1;




var CW = 1;	//Full Marks for being right handed
var ACW = 0;	//Zero Marks for being left handed.... Indian Preconcieved notions become predefined definitions!!
var servoInchStep = 0;


//All variables used in ViewGenRptMain
var ViewGenRptGetStartDate = 11;
var ViewGenRptGetEndDate = 22;
var ViewGenRptGetTestConductor = 33;
var ViewGenRptGetTestId = 44;
var ViewGenRptStatus = 0;
var dpStart, dpEnd;
var dbQStartDate, dbQEndDate, dbQConductorName, dbQTestName;




//Global Variables for test setting
var ETSet_Pressure = ETPARAMENTRY_TESTPRESSURE_MIN;//Default value should be 15, changed to 100 for testing
var ETSet_OpeningRotation = ETPARAMENTRY_OPEN_ROTATION_MIN;
var ETSet_ClosingTorque = ETPARAMENTRY_CLOSING_TORQUE_MIN;
var ETSet_EndTorque = ETPARAMENTRY_CLOSING_TORQUE_MIN;
var ETSet_Cycles = ETSET_CYCLES_MIN;
var ETSet_TestDateAndTime;
var ETSet_TestId = "";
var ETSet_TestConductor = "";
var ETSet_UsedClosingTorque;
var ET_ResumeTestCompletedCycles = 0;

//Global Variables for hiding and showing the Canvas elements
var boolCanvasIncrementDecrementSliderShow = 1;    //1: Show the canvas, 0: hide the canvas
var boolCanvasOnscreenKbdShow = 0;
var boolETTestRunFlag = 0;

//String Varaiables for canvas display
var strCanETSet_Pressure = "";
var strCanETSet_OpeningRotation = "";
var strCanETSet_ClosingTorque = "";
var strCanETSet_EndTorque = "";
var strCanETSet_Cycles = "";
var strCanETSet_TestId = "";
var strCanETSet_TestConductor = "";

var kbdTotalRows = 5;
var kbdShiftStatus = KBD_KEY_INACTIVE;
var kbdCapsLockStatus = KBD_KEY_INACTIVE;
var kbdCapAlphabets = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var kbdSmallAlphabets = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var coordX, coordY;
var kbdKeyIndex, kbdSpecialKeys;
var kbdValidKey;
var kbdActiveFlag = 0;
var TPE_EditIconActiveFlag = 0;


//Canvas Test Conduct Show Hide Variables
var varTestCondInterval_sh = 0;
var varTestComponent_sh = 0;
var varTestCycle_sh = 0;
var varGrInlet_sh = 0;
var varGrOutlet_sh = 0;
var varGrTq_sh = 0;
var varTestCondParam_sh = 0;
var varErrWindow_sh = 0;

//Test Actual Parameters
var vlInletIsolatingStat = 0;
var vlInletIsolatingDesired = 0;
var vlInletVentingStat = 0;
var vlIntletVentingDesired = 0;
var vlOutletExhaustStat = 0;
var vlOutletExhaustDesired = 0;
var vlCntrRlyDesired = 0;
var vlRstRlyDesired = 0;
var CyclesCounter = 0;
var CounterDisplayActivated = 0;
var vInletPressureCurrentReading = 0;
var vOutletPressureCurrentReading = 0;
var vTqPositiveVal, vTqNegativeVal, vTqTempVal;
var vTqPeakPositiveVal = 0;
var vTqPeakNegativeVal = 0;
var vTqCalCntr = 0;
var vServoDelayCntr = 0;
var tqAquireDelayCntr = 0;
var vTestInterval = 0;	//This variable counts the time for which the test has been executed
var vLastCycleInterval = 0;//This variable stores the time required for completion of the last cycle
var vCurrrentCycleInterval = 0;//This variable stores the time required for completion of the current cycle
var vAverageCycleInterval = 0;//This variable stores the average time required for each cycle.
var vSampleCntr = 0;


//Servo Parameters
var srvoActualPosn = 0;
var srvoActualTq = 0;
var srvoStatus = 0;

var srvoDesPosn = 0;
var srvoDesTq = 0;


//Test Execution Loop Variable
var vIntervalId;

//Test Execution Delay Variables
var vInitDepressurizationInterval = 10;	//10 --- 10*500 --- 5000mSec
var vValveCloseTimeoutInterval = 8;//10 --- 10*500 --- 5000mSec
var vValveInletPrApplicationInterval = 10; //10 --- 10*500 --- 5000mSec
var vChargedOutletPressureMonitorInterval = 10;//10 --- 10*500 --- 5000mSec
var vChargedOutletDischargeInterval = 10;//10 --- 10*500 --- 5000mSec
var vDischargedOutletMonitorInterval = 10;//10 --- 10*500 --- 5000mSec
var vValveOpenTimeoutInterval = 14;//10 --- 10*500 --- 5000mSec
var vOpenChannelPressureMonitorInterval = 12;//10 --- 10*500 --- 5000mSec
var vEmergencyStopInterval = 20;//20 --- 20*500 --- 5000mSec
var vCycleInProgress = 0;

var vDlyCntr = 0;
var vRetHrs, vRetMins, vRetSecs;
var vstrRetHHMMSS;
var vTestId = 0;
//var CycleCompletionGage;
var vTqMaxTolerance;

var vGaugeInletPr, vGaugeOutletPr;

var x = 4;
var y = 5;

var vDebugMovePos = 0;
var vAppliedTq;
var vEmergencyStopFlag = 0;
var vET_Return_Status = 0;
var vET_Tq_InitialCalDone = 0;



var kbdKeyPosnArrXStart = [
	[19, 69, 119, 169, 219, 269, 319, 369, 419, 469],
	[39, 89, 139, 189, 239, 289, 339, 389, 439],
	[89, 139, 189, 239, 289, 339, 389],
	[19, 69, 119, 169, 219, 269, 319, 369, 419, 469],
	[19, 69, 119, 419]
];

var kbdKeyPosnArrXEnd = [
	[61, 111, 161, 211, 261, 311, 361, 411, 461, 511],
	[81, 131, 181, 231, 281, 331, 381, 431, 481],
	[131, 181, 231, 281, 331, 381, 431],
	[61, 111, 161, 211, 261, 311, 361, 411, 461, 511],
	[61, 111, 411, 461]
];

var kbdKeyCount = [10, 9, 7, 10, 4];
var ETparamEntryEditParamFlag = 0;


//Slider Preset Variables
var slider_minv, slider_maxv, slider_currv, slider_step;
var slider_readValue;

//Event Listeners for testParamEntry.html

//Vars for Gauge
var OutletPrGauge = null;
var InletPrGauge = null;
var TqGauge = null;

//vars for Counter Gage
var CounterGage = null;
var CounterGageShownFlag = 0;

//PHP Testing
var single = 2;

//Positive Negative Tolerances for Inlet OutletPressure
//TODO: Store and retrieve these parameters from a file!!!
var ET_InletPrPositiveTolerance = 5;
var ET_OutletPrPositiveTolerance = 5;
var ET_InletPrNegativeTolerance = 5;
var ET_OutletPrNegativeTolerance = 5;

var ET_ErrorId = 0;
var ET_ERROR_INSUFFICIENT_INLET_PRESSURE = 1;
var ET_ERROR_INSUFFICIENT_OUTLET_PRESSURE = 2;
var ET_ERROR_EXCESS_OUTLET_PRESSURE = 3;
var ET_ERROR_VALVE_OPEN = 4;
var ET_ERROR_VALVE_CLOSE = 5;
var ET_ERROR_EMERGENCY_STOP = 6;
var ET_ERROR_SERVO_MECHANISM = 7;
var ET_ERROR_CALIBRATION_FAILURE = 8;
var ET_ERROR_JIG_SEAT_LEAKAGE = 9;
var ET_ERROR_JIG_LKG_OR_SPINDLE_JAM = 10;
var ET_ERROR_DISPLAYED_FLAG = 0;




var ET_InsufficientInletPressureCntr = 0;
var ET_InsufficientOutletPressureCntr = 0;
var ET_ExcessOutletPressureCntr = 0;
var ET_ValveOpenErrCntr = 0;
var ET_ValveCloseErrCntr = 0;
var ET_EmergencyStopCntr = 0;
var ET_ServoMechErrorCntr = 0;
var ET_JigLeakageCntr = 0;
var ET_JigSpindleCntr = 0;


var ET_TEST_ID_PARAM_ENTERED = 0;
var ET_TEST_ID_ACCEPTED = 1;
var ET_TEST_ID_BEGUN = 2;
var ET_TEST_ID_PAUSED_BY_USER = 3;
var ET_TEST_ID_ABORTED_BY_USER = 4;
var ET_TEST_ID_COMPLETE = 5;
var ET_TEST_ID_ABORTED_BY_ERROR = 6;



var ET_DoNotIncrementCycleCntrFlag = 0;
var ET_TorqueIncrementPercentage = 0;


//Graph Config Variables
var ctxGrInlet, ctxGrOutlet, ctxGrTorque;
var GrInlet, GrOutlet, GrTorque;
var GrInletShownFlag = 0;
var GrOutletShownFlag = 0;
var GrTorqueShownFlag = 0;

//Graph Variables
var GrInletDisplayedSampleCnt = 0;
var GrOutletDisplayedSampleCnt = 0;
var GrTqDisplayedSampleCnt = 0;

//Graph Erroneous Display resolution 
var GrInletPrevVal = 0;
var GrOutletPrevVal = 0;
var GrTqPrevVal = 0;

//Test Status Variable
var strET_Test_Status = "";
var vET_TestStatusUpdateStausFlag = 0;


var vTableRowElements, vTableRowElementsDeglow;
var vTableDisplayedFlag = 0;

//database variables
var vDB_RcdToGet = 1;
var vDB_cnt = 0;
var vDB_str = "";

var vDB_GetRcdDatesId;
var vDB_GetRcdByConductor;
var vDB_GetRcdByTestId;
var vDB_GetRcdIncompTest;
var VDB_GetIncompTstParam;
var VDB_StoreRcdProcess;

var vDB_strQuery = "";



var vDB_TestIdNum = new Array(100);
var vDB_TestConductor = new Array(100);
var vDB_TestIdStr = new Array(100);
var vDB_TestDate = new Array(100);
var vDB_Result = new Array(100);
var vDB_srNo = new Array(100);

var vDB_Q_stDate = 0;
var vDB_Q_stMonth = 0;
var vDB_Q_stYear = 0;
var vDB_Q_EndDate = 0;
var vDB_Q_EndMonth = 0;
var vDB_Q_EndYear = 0;
var vDB_TempDate, vDB_TempMonth, vDB_TempYear;
var vDB_AjaxExecuted = 0;

var vDBTableRow = new Array(6);
var vDB_responseReady = 0;



const GET_BETN_DATES_TRIGGER_AJAX = 1;
const GET_BETN_DATES_AWAIT_COMPLETION = 2;
const GET_BETN_DATES_TAKE_ACTION = 3;
const GET_BETN_DATES_EXIT_ACTION = 4;

const GET_BY_CONDUCTOR_TRIGGER_AJAX = 1;
const GET_BY_CONDUCTOR_AWAIT_COMPLETION = 2;
const GET_BY_CONDUCTOR_TAKE_ACTION = 3;
const GET_BY_CONDUCTOR_EXIT_ACTION = 4;

const GET_BY_TEST_ID_TRIGGER_AJAX = 1;
const GET_BY_TEST_ID_AWAIT_COMPLETION = 2;
const GET_BY_TEST_ID_TAKE_ACTION = 3;
const GET_BY_TEST_ID_EXIT_ACTION = 4;

const GET_BY_INCOMP_TEST_TRIGGER_AJAX = 1;
const GET_BY_INCOMP_TEST_AWAIT_COMPLETION = 2;
const GET_BY_INCOMP_TEST_TAKE_ACTION = 3;
const GET_BY_INCOMP_TEST_EXIT_ACTION = 4;

const INCOMP_TST_GET_TEST_PARAM_FROM_DB = 1;
const INCOMP_TST_AWAIT_RESPONSE = 2;
const INCOMP_TST_STORE_PARAM_IN_FILE_BEGIN = 3;
const INCOMP_TST_STORE_PARAM_IN_FILE_AWAIT = 4;
const INCOMP_TST_LOAD_PAGE = 5;

const RESTART_TEST_GET_PARAM = 1;
const RESTART_TEST_FILL_PARAM = 2;
const RESTART_TEST_EXIT_ACTION = 3;

const STORE_TEST_PARAM_BEGIN = 1;
const STORE_TEST_PARAM_AWAIT = 2;
const STORE_TEST_PARAM_EXIT_ACTION = 3;

const RESUME_LATER_BEGIN 					= 1;
const RESUME_LATER_EMERGENCY_STOP_MONITOR	= 2;
const RESUME_LATER_UPDATE_STATUS			= 3;
const RESUME_LATER_AWIT_STATUS_UPDATE_COMP  = 4;
const RESUME_LATER_EXIT_ACTION 				= 5;

const ABORT_TEST_BEGIN	 					= 1;
const ABORT_TEST_EMERGENCY_STOP_MONITOR		= 2;
const ABORT_TEST_UPDATE_STATUS				= 3;
const ABORT_TEST_AWIT_STATUS_UPDATE_COMP 	= 4;
const ABORT_TEST_EXIT_ACTION 				= 5;




var vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_TRIGGER_AJAX;
var VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_TRIGGER_AJAX;
var VDB_GetRecordByTestId = GET_BY_TEST_ID_TRIGGER_AJAX;
var vDB_GetIncompleteRcd = GET_BY_TEST_ID_TRIGGER_AJAX;
var vDBResumeTestStat = INCOMP_TST_GET_TEST_PARAM_FROM_DB;
var vDBRestartTestStat = RESTART_TEST_GET_PARAM;
var vDBStoreTestParamStat = STORE_TEST_PARAM_BEGIN;

var vResumeTestStat = RESUME_LATER_BEGIN;
var vAbortTestStat =  ABORT_TEST_BEGIN;


var vFunctionReentryCntr = 0;










var GrInletconfig = {
	type: 'line',
	data: {
		labels: ["0"],
		datasets: [{
			label: "Inlet Pressure (bars)",
			data: [0],
			fill: false,
			pointRadius: 0,
			lineTension: 0
		}]
	},
	options: {
		responsive: true,
		hover: {
			mode: 'label'
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Time (Seconds)'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Inlet Pressure'
				}
			}]
		},
		title: {
			display: true,
			text: 'Inlet Pressure'
		}
	}
};
var GrOutletconfig = {
	type: 'line',
	font: '15px Trebuchet MS',
	data: {
		labels: ["0"],
		datasets: [{
			label: "Outlet Pressure (bars)",
			data: [0],
			fill: false,
			pointRadius: 0,
			lineTension: 0

		}]
	},
	options: {
		responsive: true,
		hover: {
			mode: 'label'
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Time (Seconds)'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Outlet Pressure'
				}
			}]
		},
		title: {
			display: true,
			text: 'Outlet Pressure'

		}
	}
};
var GrTqconfig = {
	type: 'line',
	data: {
		labels: ["0"],
		datasets: [{
			label: "Torque (N-m)",
			data: [0],
			fill: false,
			pointRadius: 0,
			lineTension: 0
		}]
	},
	options: {
		responsive: true,
		hover: {
			mode: 'label'
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Time (Seconds)'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Torque'
				}
			}]
		},
		title: {
			display: true,
			text: 'Torque'
		}
	}
};



function testParamEntryEventAdd() {
	document.getElementById("canvasKbd").addEventListener("click", ETparamEntryGetKBdClickCoordinates, false);//Put the brackets to the function name and get screwed for next 6 hours!!!
	document.getElementById("canvasKbd").addEventListener("mousedown", canvasKbdGlowButton, false);
	document.getElementById("canvasKbd").addEventListener("mouseup", canvasKbdDeglowButton, false);
	document.getElementById("canvasKbd").addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
	// document.getElementById("canvasTestParam").addEventListener("click", ETparamEntryGetParamSelectedClickCoordinates, false);
	//Up Arrow
	document.getElementById("CanvasIncrementArrow").addEventListener("mouseover", ETParamEntryIncArrowMouseOverAction, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("mouseout", ETParamEntryIncArrowMouseOut, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("click", ETParamEntryUpArrowAction, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
	//Down Arrow
	document.getElementById("CanvasDecrementArrow").addEventListener("mouseover", ETParamEntryDecArrowMouseOverAction, false);
	document.getElementById("CanvasDecrementArrow").addEventListener("mouseout", ETParamEntryDecArrowMouseOut, false);
	document.getElementById("CanvasDecrementArrow").addEventListener("click", ETParamEntryDownArrowAction, false);
	document.getElementById("CanvasDecrementArrow").addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
	//Test Parameters
	//document.getElementById("canvasTestParam").addEventListener("mouseover",ETParamEntryEditMouseOverAction,false);
	//document.getElementById("canvasTestParam").addEventListener("mouseout",ETParamEntryEditMouseOut,false);
	document.getElementById("canvasTestParam").addEventListener("click", ETParamEntryEditClick, false);
	document.getElementById("canvasTestParam").addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
}



function DrawCanvasForParamEntry(canvasId) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C1CEC7';
	lclContext.fillRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.clearRect(5, 5, lclCanvas.width - 10, lclCanvas.height - 10);
}

function ShowIconInCanvas(canvasId, IconFileName, PosnX, PosnY) {
	var lclImage = new Image();
	lclImage.src = IconFileName;
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclImage.onload = function () {
		// At this point, the image is fully loaded
		// So do your thing!	
		lclContext.drawImage(lclImage, PosnX, PosnY);
		lclContext.fill();
	};
}

function showSingleIconMultipleTimesInCanvas(canvasId, IconFileName, PosnXArray, PosnYArray) {
	var lclImage = new Image();
	lclImage.src = IconFileName;

	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclImage.onload = function () {
		// At this point, the image is fully loaded
		// So do your thing!
		for (var i = 0; i < PosnXArray.length; i++) {
			lclContext.drawImage(lclImage, PosnXArray[i], PosnYArray[i]);
			lclContext.fill();
		}
	};
}

function canvasKbdDraw(canvasId) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C1CEC7';
	lclContext.fillRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.clearRect(5, 5, lclCanvas.width - 10, lclCanvas.height - 10);
	var lclCounter = 0;
	//Draw Rectangles for the first line
	var startX, startY;
	startX = 20;
	startY = 20;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//qwertyuiop
		lclContext.strokeStyle = '#C1CEC7';
		lclContext.lineWidth = 2;
		var startPt = (startX + (50 * lclCounter));
		lclContext.strokeRect(startPt, startY, 40, 40);

	}
	//Draw Rectangles for the second line
	startX = 40;
	startY = 80;
	for (lclCounter = 0; lclCounter < 9; lclCounter++) {
		//asdfghjkl       
		startPt = (startX + (50 * lclCounter));
		lclContext.strokeRect(startPt, startY, 40, 40);
	}
	//Draw Rectangles for the third line
	startX = 90;
	startY = 140;
	for (lclCounter = 0; lclCounter < 7; lclCounter++) {
		//zxcvbnm
		startPt = (startX + (50 * lclCounter));
		lclContext.strokeRect(startPt, startY, 40, 40);
	}

	//Draw Rectangles for Numbers
	startX = 20;
	startY = 200;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//1234567890
		startPt = (startX + (50 * lclCounter));
		lclContext.strokeRect(startPt, startY, 40, 40);
	}

	//Draw Rectangles for the Special Inputs Line
	startX = 20;
	startY = 260;
	for (lclCounter = 0; lclCounter < 2; lclCounter++) {
		//Draw the Caps Lock and Shift Keys
		startPt = (startX + (50 * lclCounter));
		lclContext.strokeRect(startPt, startY, 40, 40);
	}

	//Space Button
	startPt = (startX + (100));   //100 = 50*2
	lclContext.fillRect(startPt, startY, 290, 40);

	//Backspace Button
	startX = 420;
	lclContext.strokeRect(startX, startY, 40, 40);

	//Insert text for all the special buttons
	//"Bk.Sp"    //"Caps"   //"Shift"
	lclContext.fillStyle = '#C1CEC7';
	lclContext.font = "15px Trebuchet MS";
	lclContext.textAlign = "center";
	lclContext.fillText("Caps", 40, 290);
	lclContext.fillText("Shift", 90, 290);
	lclContext.fillText("Bk.Sp", 440, 290);
	kbdActiveFlag = 1;
	kbdCapsLockStatus = KBD_KEY_INACTIVE;
	kbdShiftStatus = KBD_KEY_INACTIVE;
}

function canvasKbdCharacter(canvasId, xPos, yPos, varFont, varFontSize, varFontColor, strSingleCharacter) {
	xPos = xPos + 20; //20 is (width of rectangle)/2
	yPos = yPos + 30; //30 is [(Heighy of rectangle)/2 + 10]

	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = varFontColor;
	lclContext.textAlign = "center";
	var varFontstr = varFontSize.toString() + "px " + varFont;
	lclContext.font = varFontstr;
	lclContext.fillText(strSingleCharacter, xPos, yPos);
}


function canvasKbdClearCharacter(canvasId, xPos, yPos) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.clearRect(xPos + 2, yPos + 2, 36, 36);
}

function canvasKbdClearCharacters(canvasId) {
	//Use this function to clear the text!!!
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');

	var lclCounter = 0;
	//Draw Rectangles for the first line
	var startX, startY;

	startX = 20;
	startY = 20;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//qwertyuiop
		var startPt = (startX + (50 * lclCounter));
		lclContext.clearRect(startPt + 2, startY + 2, 36, 36);
	}

	//Draw Rectangles for the second line
	startX = 40;
	startY = 80;
	for (lclCounter = 0; lclCounter < 9; lclCounter++) {
		//asdfghjkl
		startPt = (startX + (50 * lclCounter));
		lclContext.clearRect(startPt + 2, startY + 2, 36, 36);
	}

	//Draw Rectangles for the third line
	startX = 90;
	startY = 140;
	for (lclCounter = 0; lclCounter < 7; lclCounter++) {
		//zxcvbnm
		startPt = (startX + (50 * lclCounter));
		lclContext.clearRect(startPt + 2, startY + 2, 36, 36);
	}

	//Clear Rectangles for the Number line
	startX = 20;
	startY = 200;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//1234567890
		startPt = (startX + (50 * lclCounter));
		lclContext.clearRect(startPt + 2, startY + 2, 36, 36);
	}
}

function canvasKbdFillCharacter(canvasId, charCode, charColor, varCharArray) {
	var startX, startY, startPt, lclOffset, lclCounter, lclCode, lclProcessFlag;
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = charColor;
	lclProcessFlag = 0;

	if (charCode < 10) {
		startX = 20;
		startY = 20;
		lclOffset = 0;
		lclCode = charCode - lclOffset;
		lclProcessFlag = 1;
	}
	if (charCode > 9 && charCode < 19) {
		startX = 40;
		startY = 80;
		lclOffset = 10;
		lclCode = charCode - lclOffset;
		lclProcessFlag = 1;
	}

	if (charCode > 18 && charCode < 26) {
		startX = 90;
		startY = 140;
		lclOffset = 19;
		lclCode = charCode - lclOffset;
		lclProcessFlag = 1;
	}

	if (charCode > 25 && charCode < 36) {
		startX = 20;
		startY = 200;
		lclOffset = 26;
		lclCode = charCode - lclOffset;
		lclProcessFlag = 1;

	}

	if (charCode > 35 && charCode < 40) {
		lclOffset = 36;
		lclCode = charCode - lclOffset;
	}

	//alert ("startX:" + startX + "startY:" +  startY);

	if (lclProcessFlag === 1) {
		for (lclCounter = 0; lclCounter <= lclCode; lclCounter++)
			startPt = (startX + (50 * lclCounter));
		canvasKbdClearCharacter(canvasId, startPt, startY);
		canvasKbdCharacter(canvasId, startPt, startY, 'Trebuchet MS', 30, charColor, varCharArray[charCode]);
	}
}

function canvasKbdFillCharacters(canvasId, varCharArray) {
	var lclCounter = 0;
	var charCounter = 0;
	//Draw Rectangles for the first line
	var startX, startY;
	startX = 20;
	startY = 20;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//qwertyuiop
		var startPt = (startX + (50 * lclCounter));
		canvasKbdCharacter(canvasId, startPt, startY, 'Trebuchet MS', 30, '#C1CEC7', varCharArray[charCounter]);
		charCounter++;
	}
	//Draw Rectangles for the second line
	startX = 40;
	startY = 80;
	for (lclCounter = 0; lclCounter < 9; lclCounter++) {
		//asdfghjkl
		startPt = (startX + (50 * lclCounter));
		canvasKbdCharacter(canvasId, startPt, startY, 'Trebuchet MS', 30, '#C1CEC7', varCharArray[charCounter]);
		charCounter++;
	}
	//Draw Rectangles for the third line
	startX = 90;
	startY = 140;
	for (lclCounter = 0; lclCounter < 7; lclCounter++) {
		//zxcvbnm
		startPt = (startX + (50 * lclCounter));
		canvasKbdCharacter(canvasId, startPt, startY, 'Trebuchet MS', 30, '#C1CEC7', varCharArray[charCounter]);
		charCounter++;
	}

	//Draw Rectangles for fourth Line (numbers!)
	startX = 20;
	startY = 200;
	for (lclCounter = 0; lclCounter < 10; lclCounter++) {
		//zxcvbnm
		startPt = (startX + (50 * lclCounter));
		canvasKbdCharacter(canvasId, startPt, startY, 'Trebuchet MS', 30, '#C1CEC7', varCharArray[charCounter]);
		charCounter++;
	}
}

function canvasKbdGlowButton(event) {
	if (kbdActiveFlag === 1) {
		//alert("GlowBtn");
		canvasGetClickCoordinates(event, "divCvsKbd");
		//alert("GF: you are over:" + kbdKeyIndex);

		canvasKbdGetKeyPressed();
		if (kbdValidKey === KBD_KEY_VALID) {
			if (kbdCapsLockStatus === KBD_KEY_ACTIVE || kbdShiftStatus === KBD_KEY_ACTIVE)
				canvasKbdFillCharacter('canvasKbd', kbdKeyIndex, '#C7FF32', kbdCapAlphabets);
			else
				canvasKbdFillCharacter('canvasKbd', kbdKeyIndex, '#C7FF32', kbdSmallAlphabets);
		}
	}
}


function canvasKbdDeglowButton(event) {
	if (kbdActiveFlag === 1) {
		//alert("DeGlowBtn");
		canvasGetClickCoordinates(event, "divCvsKbd");
		canvasKbdGetKeyPressed();
		//alert("you have left Key no:" + kbdKeyIndex);
		if (kbdValidKey === KBD_KEY_VALID) {
			if (kbdCapsLockStatus === KBD_KEY_ACTIVE || kbdShiftStatus === KBD_KEY_ACTIVE)
				canvasKbdFillCharacter('canvasKbd', kbdKeyIndex, '#C1CEC7', kbdCapAlphabets);
			else
				canvasKbdFillCharacter('canvasKbd', kbdKeyIndex, '#C1CEC7', kbdSmallAlphabets);
		}
	}
}
function focusFunction(myId, canvasId) {
	lclID = document.getElementById(myId);
	lclID.style.color = "#C7FF32";
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C7FF32';
	lclContext.fillRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.clearRect(10, 10, lclCanvas.width - 10, lclCanvas.height - 10);
}

function lostFocusFunction(myId, canvasId) {
	lclID = document.getElementById(myId);
	lclID.style.color = "#C1CEC7";
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.clearRect(0, 0, lclCanvas.width, lclCanvas.height);
}

function canvasHide(canvasId) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.clearRect(0, 0, lclCanvas.width, lclCanvas.height);
}


function SetCanvasText(canvasID, strrText, uirLineNum, varFont) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C1CEC7';
	lclContext.font = varFont;
	//lclContext.font = '150% Trebuchet MS';
	lclContext.fillText(strrText, 30, 40 * uirLineNum);
}

function SetCanvasText_WithPgmbleLineOffset(canvasID, strrText, uirLineNum, uirLineOffset, varFont) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C1CEC7';
	lclContext.font = varFont;
	//lclContext.font = '150% Trebuchet MS';
	lclContext.fillText(strrText, 30, uirLineOffset * uirLineNum);
}

function SetCanvasTextWithSpacing(canvasID, strrText, uirLineNum, varFont, lineSpacing) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = '#C1CEC7';
	lclContext.font = varFont;
	lclContext.fillText(strrText, 30, lineSpacing * uirLineNum);
}

//Compliment function of SetCanvasText
function EraseCanvasText(canvasID, uirLineNum) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	var lclStartY = 40 * uirLineNum;
	//lclContext.fillStyle = '#C7FF32';	//
	//lclContext.fillRect(30, lclStartY-12,lclCanvas.width - 35,15);
	lclContext.clearRect(30, lclStartY - 12, lclCanvas.width - 35, 15);
}

function EraseCanvasTextWithPgmableLineOffset(canvasID, uirLineNum, uirLineOffset) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	var lclStartY = uirLineOffset * uirLineNum;
	//lclContext.fillStyle = '#C7FF32';	//
	//lclContext.fillRect(30, lclStartY-12,lclCanvas.width - 35,15);
	lclContext.clearRect(30, lclStartY - 12, lclCanvas.width - 35, 15);
}


function SetCanvasTextWithOffsets(canvasID, strrText, uirLineNum, varFont, varNewLineOffset, varIndentOffset) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');

	lclContext.fillStyle = '#C1CEC7';
	lclContext.font = varFont;
	//lclContext.font = '150% Trebuchet MS';
	lclContext.fillText(strrText, 30 + varIndentOffset, (40 * uirLineNum) + varNewLineOffset);
}

function canvasSetBackgroundImage(canvasId, urlToImage)	//Not Working!!!
{
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');

	var background = new Image();
	background.src = urlToImage;

	background.onload = function () {
		lclContext.drawImage(background, 0, 0);
	};
}

function SetCanvasHeader(canvasId, strrText, uirLineNum, varFont) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');

	lclContext.fillStyle = '#C7FF32';
	lclContext.font = varFont;
	//lclContext.font = '200% Trebuchet MS';
	lclContext.clearRect(10, 20, lclCanvas.width - 20, 25);
	lclContext.fillText(strrText, 30, 40 * uirLineNum);
}

function SetCanvasHeaderWithoutClearRect(canvasId, strrText, uirLineNum, varColor, varFont) {
	var lclCanvas = document.getElementById(canvasId);
	var lclContext = lclCanvas.getContext('2d');


	lclContext.fillStyle = '#C1CEC7';
	//lclContext.fillStyle = '#C7FF32';
	lclContext.fillRect(30, 40 * (uirLineNum), lclCanvas.width - 40, -25);

	lclContext.fillStyle = varColor;
	lclContext.font = varFont;
	lclContext.fillText(strrText, 30, 40 * uirLineNum);
}


function ETparamEntryGetKBdClickCoordinates(event) {
	if (kbdActiveFlag === 1) {
		canvasGetClickCoordinates(event, "divCvsKbd");
		//alert("X Coord::"+ coordX + "Y Coord::" + coordY);
		canvasKbdGetKeyPressed();
		if (kbdValidKey === KBD_KEY_VALID)
			KbdTakeAction("canvasKbd", 'idTestParam');
	}
}


function ETParamEntryEditClick(event) {
	if (TPE_EditIconActiveFlag === 1) {
		//alert("Something is working");
		canvasGetClickCoordinates(event, "divCvsTestParam");
		ETparamEntryGetParameterClicked();
		if (ETparamEntryEditParamFlag > 0)
			ETparamEntryEditParam();
	}
}

function ETparamEntryEditParam() {
	switch (ETparamEntryEditParamFlag) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			//alert("TP");	 
			//DrawCanvasForParamEntry
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetTestPressure();
			ETParam_RefillTestParameter('idTestParam', ETSet_Pressure, " bars");
			break;

		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetRotation();
			ETParam_RefillTestParameter('idTestParam', ETSet_OpeningRotation, " Degrees");
			break;

		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetTorque();
			ETParam_RefillTestParameter('idTestParam', ETSet_ClosingTorque, " N-m");
			break;

		case ETPARAMENTRY_END_TORQUE_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetEndTorque();
			ETParam_RefillTestParameter('idTestParam', ETSet_EndTorque, " N-m");
			break;


		case ETPARAMENTRY_TEST_CYCLES_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetCycles();
			ETParam_RefillTestParameter('idTestParam', ETSet_Cycles, "");
			break;

		case ETPARAMENTRY_TEST_ID_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetTestId();
			//Test Id Here
			ETParam_RefillStringTestParameter('idTestParam', ETSet_TestId);
			break;

		case ETPARAMENTRY_TEST_CONDUCTOR_NEW:
			EraseCanvasText('canvasParamEntryMain', 2);
			EraseCanvasText('canvasParamEntryMain', 3);
			ETParam_ShowGetTest_Conductor();
			//Test Conductor here
			ETParam_RefillStringTestParameter('idTestParam', ETSet_TestConductor);
			break;

		default:
			alert("default:" + ETparamEntryEditParamFlag);
	}
	if (boolCanvasIncrementDecrementSliderShow === 0)
		incrementDecrementSliderShowFlagDeactivate();
	else
		incrementDecrementSliderShowFlagActivate();
	//ETPARAMENTRY_showSelectedParameterCanvas(ETparamEntryEditParamFlag);
}

//This function lets you know which parameter is to be edited depending on where the click of the mouse is!
function ETparamEntryGetParameterClicked() {
	ETparamEntryEditParamFlag = 0;
	if (coordY > 59 && coordY < 96)
		ETparamEntryEditParamFlag = ETPARAMENTRY_TESTPRESSURE_NEW;
	if (coordY > 99 && coordY < 136)
		ETparamEntryEditParamFlag = ETPARAMENTRY_OPEN_ROTATION_NEW;
	if (coordY > 139 && coordY < 176)
		ETparamEntryEditParamFlag = ETPARAMENTRY_CLOSING_TORQUE_NEW;
	if (coordY > 179 && coordY < 216)
		ETparamEntryEditParamFlag = ETPARAMENTRY_END_TORQUE_NEW;
	if (coordY > 219 && coordY < 256)
		ETparamEntryEditParamFlag = ETPARAMENTRY_TEST_CYCLES_NEW;
	if (coordY > 259 && coordY < 301)
		ETparamEntryEditParamFlag = ETPARAMENTRY_TEST_ID_NEW;
	if (coordY > 304 && coordY < 346)
		ETparamEntryEditParamFlag = ETPARAMENTRY_TEST_CONDUCTOR_NEW;
}

function KbdTakeAction(canvasId, itemId) {
	lclId = document.getElementById(itemId);
	if (kbdSpecialKeys !== 0) {
		switch (kbdKeyIndex) {
			case KBD_SPL_CAPSLOCK:
				if (kbdCapsLockStatus === KBD_KEY_INACTIVE) {
					kbdCapsLockStatus = KBD_KEY_ACTIVE;
					kbdShiftStatus = KBD_KEY_INACTIVE;
					canvasKbdClearCharacters(canvasId);
					canvasKbdFillCharacters(canvasId, kbdCapAlphabets);
				}
				else {
					kbdCapsLockStatus = KBD_KEY_INACTIVE;
					canvasKbdClearCharacters(canvasId);
					canvasKbdFillCharacters(canvasId, kbdSmallAlphabets);
				}
				break;
			case KBD_SPL_SHIFT:
				if (kbdShiftStatus === KBD_KEY_INACTIVE) {
					if (kbdCapsLockStatus === KBD_KEY_INACTIVE) {
						kbdShiftStatus = KBD_KEY_ACTIVE;
						canvasKbdClearCharacters(canvasId);
						canvasKbdFillCharacters(canvasId, kbdCapAlphabets);
					}
				}
				else {
					kbdShiftStatus = KBD_KEY_INACTIVE;
					canvasKbdClearCharacters(canvasId);
					canvasKbdFillCharacters(canvasId, kbdSmallAlphabets);
				}
				break;
			case KBD_SPL_SPACE:
				if (lclId.value.length < 21)
					lclId.value += ' ';
				break;
			case KBD_SPL_BACKSPACE:
				if (lclId.value.length > 0)
					lclId.value = lclId.value.slice(0, (lclId.value.length - 1));
				break;

			default:
				break;
		}
	}
	else    //indicates that some number or alphabet key has been clicked!!
	{
		if (kbdShiftStatus === KBD_KEY_ACTIVE || kbdCapsLockStatus === KBD_KEY_ACTIVE) {
			if (lclId.value.length < 21)
				lclId.value += kbdCapAlphabets[kbdKeyIndex];
			if (kbdShiftStatus === KBD_KEY_ACTIVE)//indicates some number or alphabet has been pressed!
			{
				kbdShiftStatus = KBD_KEY_INACTIVE;
				canvasKbdClearCharacters(canvasId);
				canvasKbdFillCharacters(canvasId, kbdSmallAlphabets);
			}
		}
		else {
			if (lclId.value.length < 21)
				lclId.value += kbdSmallAlphabets[kbdKeyIndex];
		}
	}
}

function canvasGetClickCoordinates(event, element1) {
	//alert ("a");
	event.preventDefault();
	var lcldivCvsKbd = document.getElementById(element1);
	var x = new Number();
	var y = new Number();
	//alert ("b");
	var browser = CoreGetBrowser();
	//alert("This is the browser:" + browser);

	if (event.x !== undefined && event.y !== undefined) {
		x = event.x;
		y = event.y;
		//alert ("c" + x + y);
		//var searchResult = browser.search("chrome");
		//if(searchResult !== -1)
		//{
		x -= lcldivCvsKbd.offsetLeft;
		y -= lcldivCvsKbd.offsetTop;
		//}

	}
	else {
		//alert ("d" + x + y);
		// Firefox brings you here
		x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		x -= lcldivCvsKbd.offsetLeft;
		y -= lcldivCvsKbd.offsetTop;
	}
	//alert ("ClientX: " + event.clientX + "clientY: " + event.clientY);
	//Yep!! This works!!!
	coordX = x;
	coordY = y;
	//alert ("ClientX: " + event.clientX + "clientY: " + event.clientY);
	//alert ("Mouse Event Detected X: " + x + "Y: " + y);
}

function canvasKbdGetKeyPressed() {
	var lclCounter;
	var lclRow = 100;
	kbdKeyIndex = 255;
	kbdSpecialKeys = 0;
	if (coordY > 19 && coordY < 61)
		lclRow = 1;
	if (coordY > 79 && coordY < 121)
		lclRow = 2;
	if (coordY > 139 && coordY < 181)
		lclRow = 3;
	if (coordY > 199 && coordY < 241)
		lclRow = 4;
	if (coordY > 239 && coordY < 301)
		lclRow = 5;
	var lclkbdKeyCountStart = 0;

	if (lclRow >= 0 && lclRow < 6) {
		for (lclCounter = 0; lclCounter < (lclRow - 1); lclCounter++)
			lclkbdKeyCountStart += kbdKeyCount[lclCounter];

		for (lclCounter = 0; lclCounter < kbdKeyCount[lclRow - 1]; lclCounter++) {
			if ((coordX > kbdKeyPosnArrXStart[lclRow - 1][lclCounter]) && (coordX < kbdKeyPosnArrXEnd[lclRow - 1][lclCounter])) {
				kbdKeyIndex = lclCounter + lclkbdKeyCountStart;
				lclCounter = 100;
			}
		}
	}
	//alert("Key number: " + kbdKeyIndex);
	if (kbdKeyIndex === 255 && kbdSpecialKeys === 0)
		kbdValidKey = KBD_KEY_INVALID;
	else {
		kbdValidKey = KBD_KEY_VALID;
		if (lclRow === 5)
			kbdSpecialKeys = 1;
	}
}

function canvasKbdHide() {
	canvasHide('canvasKbd');
	kbdActiveFlag = 0;
}

function LoadPage(pageID) {
	window.location.href = pageID;
}

function hideInput(inputId) {
	var lclInput = document.getElementById(inputId);
	lclInput.setAttribute('type', 'hidden');
}

function hideDiv(divId) {
	var lclInput = document.getElementById(divId);
	lclInput.style.visibility = 'hidden';
}

function unhideDiv(divId) {
	var lclInput = document.getElementById(divId);
	lclInput.style.visibility = 'visible';
}


function VisibilityHide(inputId) {
	var lclInput = document.getElementById(inputId);
	lclInput.style.visibility = 'hidden';

}


function unHideInput(inputId) {
	var lclInput = document.getElementById(inputId);
	lclInput.setAttribute('type', 'submit');
}

function unHideInput2(inputId) {
	var lclInput = document.getElementById(inputId);
	lclInput.setAttribute('type', 'visible');
}



function VisibilityShow(inputId) {
	var lclInput = document.getElementById(inputId);
	lclInput.style.visibility = 'visible';
}

function InputSetType(inputId, typeToSet) {
	var lclInput = document.getElementById(inputId);
	lclInput.setAttribute('type', typeToSet);
}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds) {
			break;
		}
	}
}
function SetBackArrowDefocused(canvasID) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	//At this point transparent Canvas is ready
	//Choose fill style as the defocused colour
	lclContext.strokeStyle = '#C1CEC7';
	lclContext.fillStyle = '#C1CEC7';
	lclContext.lineWidth = 2;
	lclContext.strokeRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.font = '550% Londrina Outline';
	lclContext.fillText("<", 4, 42);
}

function SetBackArrowFocused(canvasID) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	//At this point transparent Canvas is ready
	//Choose fill style as the defocused colour
	lclContext.strokeStyle = '#C7FF32';
	lclContext.fillStyle = '#C7FF32';
	lclContext.lineWidth = 2;
	lclContext.strokeRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.font = '550% Londrina Outline';
	lclContext.fillText("<", 4, 42);
}

function SetExitArrowDefocused(canvasID) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	//At this point transparent Canvas is ready
	//Choose fill style as the defocused colour
	lclContext.strokeStyle = '#C1CEC7';
	lclContext.fillStyle = '#C1CEC7';
	lclContext.lineWidth = 2;
	lclContext.strokeRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.font = '100% Arial';
	lclContext.fillText("X", 4, 15);
}

function SetExitArrowFocused(canvasID) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	//At this point transparent Canvas is ready
	//Choose fill style as the focused colour
	lclContext.strokeStyle = '#C7FF32';
	lclContext.fillStyle = '#C7FF32';
	lclContext.lineWidth = 2;
	lclContext.strokeRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.font = '100% Arial';
	lclContext.fillText("X", 3, 15);
}

function drawCanvasRectangle(canvasID, fillColor) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = fillColor;
	lclContext.fillRect(0, 0, lclCanvas.width, lclCanvas.height);
}

function drawCanvasRectangleWithFillColorAndBorder(canvasID, FillColor, BorderColor, BorderThickness) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.fillStyle = FillColor.toString();
	lclContext.fillRect(0, 0, lclCanvas.width, lclCanvas.height);
	lclContext.fillStyle = BorderColor.toString();
	if (BorderColor === 'transparent')
		lclContext.clearRect(BorderThickness, BorderThickness, (lclCanvas.width - (BorderThickness * 2)), (lclCanvas.height - (BorderThickness * 2)));
	else
		lclContext.fillRect(BorderThickness, BorderThickness, (lclCanvas.width - (BorderThickness * 2)), (lclCanvas.height - (BorderThickness * 2)));
}

function ChangeColorOnFocus(ItemID) {
	lclID = document.getElementById(ItemID);
	lclID.style.color = "#C7FF32";
}

function ChangeFontAndColorOnFocus(ItemID, fontSize, fontColor) {
	lclID = document.getElementById(ItemID);
	lclID.style.fontSize = fontSize;
	lclID.style.color = fontColor;
}

function ChangeText(ItemID, fontSize, fontColor, newText) {
	lclID = document.getElementById(ItemID);
	lclID.style.fontSize = fontSize;
	lclID.style.color = fontColor;
	lclID.value = newText;
}

function ChangeColorOnDefocus(ItemId) {
	lclId = document.getElementById(ItemId);
	lclId.style.color = "#C1CEC7";
}

function ClearText(ItemID) {
	lclID = document.getElementById(ItemID);
	lclID.value = '';
}

function ChangeFontAndColorOnDefocus(ItemId, fontSize, fontColor) {
	lclId = document.getElementById(ItemId);
	lclID.style.fontSize = fontSize;
	lclId.style.color = fontColor;
}


function Extract_ParameterToInteger(ItemId, varName) {
	lclId = document.getElementById(ItemId);
	var lclPressureString;
	lclPressureString = lclId.value;
	varName = parseInt(lclPressureString);
}

function ETParam_RefillTestParameter(ItemId, integerParam, stringUnit) {
	lclId = document.getElementById(ItemId);
	var lclString = integerParam.toString();
	var strValue = lclString.concat(stringUnit);
	lclId.value = strValue;
}

function ETParam_RefillStringTestParameter(ItemId, strValue) {
	lclId = document.getElementById(ItemId);
	lclId.value = strValue;
}


function CanvasDrawGauge(targetId, minVal, maxVal, numOfDiv, numOfSubDiv, bShowMinorScaleVal, GaugeTitle, GaugeUnit) {
	var GaugeVar;
	GaugeVar = new AquaGauge(targetId);
	GaugeVar.props.minValue = minVal;
	GaugeVar.props.maxValue = maxVal;
	GaugeVar.props.noOfDivisions = numOfDiv;
	GaugeVar.props.noOfSubDivisions = numOfSubDiv;
	GaugeVar.props.showMinorScaleValue = bShowMinorScaleVal;
	if (GaugeTitle !== '')
		GaugeVar.props.dialTitle = GaugeTitle.toString();
	if (GaugeUnit !== '')
		GaugeVar.props.dialSubTitle = GaugeUnit;
	GaugeVar.refresh(0);
	return GaugeVar;
}



function CanvasDrawTriangle(canvasID, VertexFirstX, VertexFirstY, VertexSecondX, VertexSecondY, VertexThirdX, VertexThirdY) {
	var lclCanvas = document.getElementById(canvasID);
	var lclContext = lclCanvas.getContext('2d');
	lclContext.beginPath();
	lclContext.moveTo(VertexFirstX, VertexFirstY);
	lclContext.lineTo(VertexSecondX, VertexSecondY);
	lclContext.lineTo(VertexThirdX, VertexThirdY);
	lclContext.fillStyle = '#C1CEC7';
	lclContext.fill();
}

function CanvasSetFillColor(canvasId, fillColor) {
	if (boolCanvasIncrementDecrementSliderShow === 1) {
		var lclCanvas = document.getElementById(canvasId);
		var lclContext = lclCanvas.getContext('2d');
		lclContext.fillStyle = fillColor;
		lclContext.fill();
	}
}

function CanvasModifyWidthHeight(canvasId, newWidth, newHeight) {
	var lclCanvas = document.getElementById(canvasId);
	lclCanvas.width = newWidth;
	lclCanvas.height = newHeight;
}

function CursorModify(ElementID, CursorType) {
	document.getElementById(ElementID).style.cursor = CursorType;
}

function CursorModifyEntirePage(CursorType) {
	var elements = document.body.getElementsByTagName('*');
	//alert("These are the elements found:" + elements.length);
	let lclCntr = 0;
	vArrOriginalCursors.length = elements.length;
	for (lclCntr = 0; lclCntr < elements.length; lclCntr++) {
		vArrOriginalCursors[lclCntr] = elements[lclCntr].style.cursor;
		elements[lclCntr].style.cursor = CursorType;
	}
}

function CursorRestoreEntirePage() {
	let lclCntr = 0;
	var elements = document.body.getElementsByTagName('*');
	//alert("This is the element length:" + elements.length);
	//alert("This is the array length:" + vArrOriginalCursors.length);
	for (lclCntr = 0; lclCntr < elements.length; lclCntr++) {
		elements[lclCntr].style.cursor = vArrOriginalCursors[lclCntr];
	}
}


function ETParamEntryIncArrowMouseOverAction() {
	CanvasSetFillColor('CanvasIncrementArrow', '#C7FF32');
	CursorModify('CanvasIncrementArrow', 'pointer');
}

function ETParamEntryIncArrowMouseOut() {
	CanvasSetFillColor('CanvasIncrementArrow', '#C1CEC7');
}

function ETParamEntryDecArrowMouseOverAction() {
	CanvasSetFillColor('CanvasDecrementArrow', '#C7FF32');
	CursorModify('CanvasDecrementArrow', 'pointer');
}

function ETParamEntryDecArrowMouseOut() {
	CanvasSetFillColor('CanvasDecrementArrow', '#C1CEC7');
}



function ETParamEntrySliderAction() {
	//alert("This is the max value:"+ slider_maxv);
	slider_readValue = $("#slider").slider("value");

	//alert("This is the value:" + slider_readValue);

	switch (ETParamEntryStatus) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			ETSet_Pressure = slider_readValue;
			ETParam_RefillTestParameter('idTestParam', ETSet_Pressure, " bars");

			break;
		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			ETSet_OpeningRotation = slider_readValue;
			ETParam_RefillTestParameter('idTestParam', ETSet_OpeningRotation, " Degrees");
			break;
		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			ETSet_ClosingTorque = slider_readValue;
			ETParam_RefillTestParameter('idTestParam', ETSet_ClosingTorque, " N-m");
			break;
		case ETPARAMENTRY_END_TORQUE_NEW:
			ETSet_EndTorque = slider_readValue;
			ETParam_RefillTestParameter('idTestParam', ETSet_EndTorque, " N-m");
			break;
		case ETPARAMENTRY_TEST_CYCLES_NEW:
			ETSet_Cycles = slider_readValue;
			ETParam_RefillTestParameter('idTestParam', ETSet_Cycles, "");
			break;
		default:
			alert("Invalid Case in function: ETParamEntryUpArrowAction");
	}

}

function ETParamEntryUpArrowAction() {
	switch (ETParamEntryStatus) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			ETSet_Pressure = ETPARAMENTRY_Increment(ETSet_Pressure, ETPARAMENTRY_TESTPRESSURE_MAX, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_Pressure, " bars");
			break;
		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			ETSet_OpeningRotation = ETPARAMENTRY_Increment(ETSet_OpeningRotation, ETPARAMENTRY_OPEN_ROTATION_MAX, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_OpeningRotation, " Degrees");
			break;
		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			ETSet_ClosingTorque = ETPARAMENTRY_Increment(ETSet_ClosingTorque, ETPARAMENTRY_CLOSING_TORQUE_MAX, 0.5);
			ETParam_RefillTestParameter('idTestParam', ETSet_ClosingTorque, " N-m");
			break;
		case ETPARAMENTRY_END_TORQUE_NEW:
			ETSet_EndTorque = ETPARAMENTRY_Increment(ETSet_EndTorque, ETPARAMENTRY_CLOSING_TORQUE_MAX, 0.5);
			ETParam_RefillTestParameter('idTestParam', ETSet_EndTorque, " N-m");
			break;
		case ETPARAMENTRY_TEST_CYCLES_NEW:
			ETSet_Cycles = ETPARAMENTRY_Increment(ETSet_Cycles, ETSET_CYCLES_MAX, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_Cycles, "");
			break;
		default:
			alert("Invalid Case in function: ETParamEntryUpArrowAction");
			break;
	}
}

function ETParamEntryDownArrowAction() {
	switch (ETParamEntryStatus) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			ETSet_Pressure = ETPARAMENTRY_Decrement(ETSet_Pressure, ETPARAMENTRY_TESTPRESSURE_MIN, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_Pressure, " bars");
			break;
		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			ETSet_OpeningRotation = ETPARAMENTRY_Decrement(ETSet_OpeningRotation, ETPARAMENTRY_OPEN_ROTATION_MIN, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_OpeningRotation, " Degrees");
			break;
		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			ETSet_ClosingTorque = ETPARAMENTRY_Decrement(ETSet_ClosingTorque, ETPARAMENTRY_CLOSING_TORQUE_MIN, 0.5);
			ETParam_RefillTestParameter('idTestParam', ETSet_ClosingTorque, " N-m");
			break;
		case ETPARAMENTRY_END_TORQUE_NEW:
			ETSet_EndTorque = ETPARAMENTRY_Decrement(ETSet_EndTorque, ETSet_ClosingTorque, 0.5);
			ETParam_RefillTestParameter('idTestParam', ETSet_EndTorque, " N-m");
			break;

		case ETPARAMENTRY_TEST_CYCLES_NEW:
			ETSet_Cycles = ETPARAMENTRY_Decrement(ETSet_Cycles, ETSET_CYCLES_MIN, 1);
			ETParam_RefillTestParameter('idTestParam', ETSet_Cycles, "");
			break;
		default:
			alert("Invalid Case in function: ETParamEntryDownArrowAction");
			break;
	}
}

function ETPARAMENTRY_Increment(varToIncrement, varMaxValue, varIncrementStep) {
	Extract_ParameterToInteger('idTestParam', varToIncrement);
	if (varToIncrement < varMaxValue)
		varToIncrement += varIncrementStep;
	return varToIncrement;

}

function ETPARAMENTRY_Decrement(varToDecrement, varMinValue, varDecrementStep) {
	Extract_ParameterToInteger('idTestParam', varToDecrement);
	if (varToDecrement > varMinValue)
		varToDecrement -= varDecrementStep;
	return varToDecrement;
}

function ETPARAMENTRY_showSelectedParameterCanvas(varParameterToShow) {
	switch (varParameterToShow) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			DrawCanvasForParamEntry('canvasTestParam');
			SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
			strCanETSet_Pressure = "Test Pressure:" + ETSet_Pressure.toString() + " bars";
			SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
			break;

		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			CanvasModifyWidthHeight('canvasTestParam', 260, 160);
			DrawCanvasForParamEntry('canvasTestParam');
			SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
			strCanETSet_OpeningRotation = "Open Rotation:" + ETSet_OpeningRotation.toString() + " Degrees";
			SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
			break;

		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			CanvasModifyWidthHeight('canvasTestParam', 260, 200);
			DrawCanvasForParamEntry('canvasTestParam');
			SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
			strCanETSet_ClosingTorque = "Closing Torque:" + ETSet_ClosingTorque.toString() + " N-m";
			SetCanvasText('canvasTestParam', strCanETSet_ClosingTorque, 4, '145% Trebuchet MS');
			break;

		case ETPARAMENTRY_END_TORQUE_NEW:
			CanvasModifyWidthHeight('canvasTestParam', 260, 240);
			DrawCanvasForParamEntry('canvasTestParam');
			SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_ClosingTorque, 4, '145% Trebuchet MS');
			strCanETSet_EndTorque = "End Torque:" + ETSet_EndTorque.toString() + " N-m";
			SetCanvasText('canvasTestParam', strCanETSet_EndTorque, 5, '145% Trebuchet MS');
			break;

		case ETPARAMENTRY_TEST_CYCLES_NEW:
			CanvasModifyWidthHeight('canvasTestParam', 260, 280);
			DrawCanvasForParamEntry('canvasTestParam');
			SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_ClosingTorque, 4, '145% Trebuchet MS');
			SetCanvasText('canvasTestParam', strCanETSet_EndTorque, 5, '145% Trebuchet MS');
			strCanETSet_Cycles = "Test Cyles:" + ETSet_Cycles.toString();
			SetCanvasText('canvasTestParam', strCanETSet_Cycles, 6, '145% Trebuchet MS');
			canvasKbdDraw('canvasKbd');
			canvasKbdFillCharacters('canvasKbd', kbdSmallAlphabets);
			break;

		case ETPARAMENTRY_TEST_ID_NEW:
			if (ETSet_TestId.length > 0) {
				CanvasModifyWidthHeight('canvasTestParam', 260, 320);
				DrawCanvasForParamEntry('canvasTestParam');
				SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_ClosingTorque, 4, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_EndTorque, 5, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_Cycles, 6, '145% Trebuchet MS');
				strCanETSet_TestId = "Test Id:" + ETSet_TestId;
				SetCanvasText('canvasTestParam', strCanETSet_TestId, 7, '145% Trebuchet MS');
				canvasKbdDraw('canvasKbd');
				canvasKbdFillCharacters('canvasKbd', kbdSmallAlphabets);
			}

			break;


		case ETPARAMENTRY_TEST_CONDUCTOR_NEW:
			//alert("C0");
			if (ETSet_TestConductor.length > 0) {
				CanvasModifyWidthHeight('canvasTestParam', 260, 360);
				DrawCanvasForParamEntry('canvasTestParam');
				//These statements added here to allow updating of the variables
				strCanETSet_Pressure = "Test Pressure:" + ETSet_Pressure.toString() + " bars";
				strCanETSet_OpeningRotation = "Open Rotation:" + ETSet_OpeningRotation.toString() + " Degrees";
				strCanETSet_ClosingTorque = "Closing Torque:" + ETSet_ClosingTorque.toString() + " N-m";
				strCanETSet_EndTorque = "End Torque:" + ETSet_EndTorque.toString() + " N-m";
				strCanETSet_Cycles = "Test Cyles:" + ETSet_Cycles.toString();
				strCanETSet_TestId = "Test Id:" + ETSet_TestId;
				SetCanvasHeader('canvasTestParam', 'Test Parameters Selected:', 1, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_Pressure, 2, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_OpeningRotation, 3, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_ClosingTorque, 4, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_EndTorque, 5, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_Cycles, 6, '145% Trebuchet MS');
				SetCanvasText('canvasTestParam', strCanETSet_TestId, 7, '145% Trebuchet MS');
				strCanETSet_TestConductor = ETSet_TestConductor;
				SetCanvasText('canvasTestParam', "Test Conductor:", 8, '145% Trebuchet MS');
				SetCanvasTextWithOffsets('canvasTestParam', ETSet_TestConductor, 9, '145% Trebuchet MS', -20, 5);

				//alert("C1");
				var xArray = [10, 10, 10, 10, 10, 10, 10];
				var yArray = [60, 100, 140, 180, 220, 260, 300];
				showSingleIconMultipleTimesInCanvas('canvasTestParam', '/PhpProject1/img/Edit-Disable.ico', xArray, yArray);
				//showSingleIconMultipleTimesInCanvas('canvasTestParam','/PhpProject1/img/Edit-Disable.ico',xArray, yArray);			
				TPE_EditIconActiveFlag = 1;
			}
			break;
		default:
			break;

	}
}

function ETParamEdit_GlowEditIcon() {
	/* if(coordX > 239 && coordX < 261)  //only one Y needs to be checked since all edit icons are aligned vertically
	 {
	 alert("Somewhere close to the edit icon");
	 if(coordY > 79 && coordY < 99)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 80);
	 if(coordY > 119 && coordY < 139)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 120);	    
	 if(coordY > 159 && coordY < 179)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 160);	    
	 if(coordY > 199 && coordY < 219)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 200);
	 if(coordY > 239 && coordY < 259)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 240);	    
	 if(coordY > 279 && coordY < 299)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 280);	    
	 if(coordY > 319 && coordY < 329)
		 ShowIconInCanvas('canvasTestParam','/PhpProject1/img/Edit-Enable.ico',240, 320);	    
	 }
	 */
}

function ETParam_ShowError() {
	if (ET_ERROR_DISPLAYED_FLAG === 0) {
		drawCanvasRectangleWithFillColorAndBorder('canvasErrWindow', '#C7FF32', '#C1CEC7', 5);
		SetCanvasHeaderWithoutClearRect('canvasErrWindow', '           ERROR!           ', 2, '#C7FF32', '350% Trebuchet MS');

		switch (ET_ErrorId) {
			case ET_ERROR_INSUFFICIENT_INLET_PRESSURE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Insufficient Inlet Pressure', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_INSUFFICIENT_OUTLET_PRESSURE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Insufficient Outlet Pressure', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_EXCESS_OUTLET_PRESSURE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Excess Outlet Pressure', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_VALVE_OPEN:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Valve Open Opn. Failed', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_VALVE_CLOSE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Valve Close Opn. Failed', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_EMERGENCY_STOP:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Emergency Stop Activated', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_SERVO_MECHANISM:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Servo Mechanism Error..Restart', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_CALIBRATION_FAILURE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         Torque Calibration Failed', 4, '#C7FF32', '200% Trebuchet MS');
				break;
			case ET_ERROR_JIG_SEAT_LEAKAGE:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         JIG/Valve Leakage Detected', 4, '#C7FF32', '200% Trebuchet MS');
				break;

			case ET_ERROR_JIG_LKG_OR_SPINDLE_JAM:
				SetCanvasHeaderWithoutClearRect('canvasErrWindow', '         JIG Leakage or Spindle Damaged', 4, '#C7FF32', '200% Trebuchet MS');
				break;

			default:
				break;
		}

	}
	ET_ERROR_DISPLAYED_FLAG = 1;


	switch (ET_ErrorId) {
		case ET_ERROR_INSUFFICIENT_INLET_PRESSURE:
			EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_INVALID_ACTION;
			convertHalfMsecToHHMMSS_String(ET_InsufficientInletPressureCntr);
			//alert(strErrTime);
			break;
		case ET_ERROR_INSUFFICIENT_OUTLET_PRESSURE:
			convertHalfMsecToHHMMSS_String(ET_InsufficientOutletPressureCntr);
			break;
		case ET_ERROR_EXCESS_OUTLET_PRESSURE:
			convertHalfMsecToHHMMSS_String(ET_ExcessOutletPressureCntr);
			break;

		case ET_ERROR_VALVE_OPEN:
			convertHalfMsecToHHMMSS_String(ET_ValveOpenErrCntr);
			break;

		case ET_ERROR_VALVE_CLOSE:
			convertHalfMsecToHHMMSS_String(ET_ValveCloseErrCntr);
			break;

		case ET_ERROR_EMERGENCY_STOP:
			convertHalfMsecToHHMMSS_String(ET_EmergencyStopCntr);
			break;

		case ET_ERROR_SERVO_MECHANISM:
			convertHalfMsecToHHMMSS_String(ET_ServoMechErrorCntr);
			break;

		case ET_ERROR_CALIBRATION_FAILURE:
			break;

		case ET_ERROR_JIG_SEAT_LEAKAGE:
			convertHalfMsecToHHMMSS_String(ET_JigLeakageCntr);
			break;

		case ET_ERROR_JIG_LKG_OR_SPINDLE_JAM:
			convertHalfMsecToHHMMSS_String(ET_JigSpindleCntr);
			break;

		default:
			break;
	}

	vstrRetHHMMSS = "                      " + vstrRetHHMMSS;
	SetCanvasHeaderWithoutClearRect('canvasErrWindow', vstrRetHHMMSS, 6, '#C7FF32', '200% Trebuchet MS');

}

function ET_ShowHideError() {
	if (ET_ErrorId !== 0)
		ETParam_ShowError();
	else {
		canvasHide('canvasErrWindow');
		ET_ErrorId = 0;
		ET_ERROR_DISPLAYED_FLAG = 0;
	}
}

function ETParam_ShowGetTestPressure() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter Service Pressure:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 1;
	ETParamEntryStatus = ETPARAMENTRY_TESTPRESSURE_NEW;
	canvasKbdHide();
	slider_minv = 0;
	slider_maxv = 400;
	slider_currv = 15;
	slider_step = 1;
	setupSlider();
}

function ETParam_ShowGetRotation() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter Rotation in deg. to open:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 1;
	ETParamEntryStatus = ETPARAMENTRY_OPEN_ROTATION_NEW;
	canvasKbdHide();
	slider_minv = 0;
	slider_maxv = 1500;
	slider_currv = 20;
	slider_step = 1;
	setupSlider();
}

function ETParam_ShowGetTorque() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter Value of Closing Torque:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 1;
	ETParamEntryStatus = ETPARAMENTRY_CLOSING_TORQUE_NEW;
	canvasKbdHide();
	slider_minv = 0;
	slider_maxv = 33;
	slider_currv = 3.5;
	slider_step = 0.5;
	setupSlider();
}

function ETParam_ShowGetEndTorque() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter Value of End Torque:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 1;
	ETParamEntryStatus = ETPARAMENTRY_END_TORQUE_NEW;
	canvasKbdHide();
	slider_minv = ETSet_ClosingTorque;
	slider_maxv = 33;
	slider_currv = ETSet_ClosingTorque;
	//slider_currv = 11;
	slider_step = 0.5;
	setupSlider();
}


function ETParam_ShowGetCycles() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter number of Cycles:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 1;
	ETParamEntryStatus = ETPARAMENTRY_TEST_CYCLES_NEW;
	canvasKbdHide();
	slider_minv = 0;
	slider_maxv = 5000;
	slider_currv = 100;
	slider_step = 10;
	setupSlider();
}

function ETParam_ShowGetTestId() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter Test ID:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 0;
	ETParamEntryStatus = ETPARAMENTRY_TEST_ID_NEW;
	canvasKbdDraw('canvasKbd');
	canvasKbdFillCharacters('canvasKbd', kbdSmallAlphabets);
	//change the input box to read write!
	document.getElementById('idTestParam').readOnly = false;
}

function ETParam_ShowGetTest_Conductor() {
	SetCanvasHeader('canvasParamEntryMain', 'Enter name of test conductor:', 1, '200% Trebuchet MS');
	boolCanvasIncrementDecrementSliderShow = 0;
	ETParamEntryStatus = ETPARAMENTRY_TEST_CONDUCTOR_NEW;
	canvasKbdDraw('canvasKbd');
	canvasKbdFillCharacters('canvasKbd', kbdSmallAlphabets);
	document.getElementById('idTestParam').readOnly = false;
}

function ETParam_ShowParamEntryComplete() {
	SetCanvasHeader('canvasParamEntryMain', 'Parameter entry complete', 1, '200% Trebuchet MS');
	SetCanvasText('canvasParamEntryMain', 'To modify any parameter click it in table on right.', 2, '110% Trebuchet MS');
	SetCanvasText('canvasParamEntryMain', 'Press Ok to start the test. ', 3, '111% Trebuchet MS');
	ETParamEntryStatus = ETPARAMENTRY_AWAIT_USER_ACCEPTANCE;
	//alert("ETPARAMENTRY_AWAIT_USER_ACCEPTANCE");
	canvasKbdHide();
	boolCanvasIncrementDecrementSliderShow = 0;
}

function incrementDecrementSliderShowFlagActivate() {

	VisibilityShow('slider');

	//The two below to be combined in a single canvas control!!!
	CanvasDrawTriangle('CanvasIncrementArrow', 0, 40, 40, 40, 20, 0);
	CanvasDrawTriangle('CanvasDecrementArrow', 0, 0, 40, 0, 20, 40);
	//Up Arrow
	document.getElementById("CanvasIncrementArrow").addEventListener("onmouseover", ETParamEntryIncArrowMouseOverAction, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("touchstart", ETParamEntryIncArrowMouseOverAction, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("onmouseout", ETParamEntryIncArrowMouseOut, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("touchend", ETParamEntryIncArrowMouseOut, false);
	document.getElementById("CanvasIncrementArrow").addEventListener("click", ETParamEntryUpArrowAction, false);


	//Down Arrow
	document.getElementById("CanvasDecrementArrow").addEventListener("onmouseover", ETParamEntryDecArrowMouseOverAction, false);

	document.getElementById("CanvasDecrementArrow").addEventListener("onmouseout", ETParamEntryDecArrowMouseOut, false);
	document.getElementById("CanvasDecrementArrow").addEventListener("click", ETParamEntryDownArrowAction, false);
}

function incrementDecrementSliderShowFlagDeactivate() {
	canvasHide('CanvasIncrementArrow');
	canvasHide('CanvasDecrementArrow');
	VisibilityHide('slider');
	document.getElementById("CanvasIncrementArrow").removeEventListener("onmouseover", ETParamEntryIncArrowMouseOverAction);
	document.getElementById("CanvasIncrementArrow").removeEventListener("onmouseout", ETParamEntryIncArrowMouseOut);
	document.getElementById("CanvasIncrementArrow").removeEventListener("click", ETParamEntryUpArrowAction);

	//Down Arrow
	document.getElementById("CanvasDecrementArrow").removeEventListener("onmouseover", ETParamEntryDecArrowMouseOverAction);
	document.getElementById("CanvasDecrementArrow").removeEventListener("onmouseout", ETParamEntryDecArrowMouseOut);
	document.getElementById("CanvasDecrementArrow").removeEventListener("click", ETParamEntryDownArrowAction);
}




function ETParam_SubmitAction(ItemId) {
	var previousStatus;
	lclId = document.getElementById(ItemId);
	var lclString;
	previousStatus = ETParamEntryStatus;

	switch (ETParamEntryStatus) {
		case ETPARAMENTRY_TESTPRESSURE_NEW:
			Extract_ParameterToInteger(ItemId, ETSet_Pressure);	//Store the Parameter value to variable
			if (TPE_EditIconActiveFlag === 0) {
				lclId.value = ETSet_OpeningRotation + " Degrees";
				ETParam_ShowGetRotation();
			}
			else {
				lclId.value = "";
				ETParam_ShowParamEntryComplete();
				document.getElementById('idTestParam').readOnly = true;
			}
			break;

		case ETPARAMENTRY_OPEN_ROTATION_NEW:
			Extract_ParameterToInteger(ItemId, ETSet_OpeningRotation);
			if (TPE_EditIconActiveFlag === 0) {
				lclId.value = ETSet_ClosingTorque + " N-m";
				ETParam_ShowGetTorque();
				CanvasModifyWidthHeight('canvasTestParam', 240, 240);
				lclString = "Valve Opening:" + ETSet_OpeningRotation.toString() + " Degree";
				SetCanvasText('canvasTestParam', lclString, 3, '145% Trebuchet MS');
				ETParamEntryStatus = ETPARAMENTRY_CLOSING_TORQUE_NEW;
			}
			else {
				lclId.value = "";
				ETParam_ShowParamEntryComplete();
				document.getElementById('idTestParam').readOnly = true;
			}
			break;


		case ETPARAMENTRY_CLOSING_TORQUE_NEW:
			Extract_ParameterToInteger(ItemId, ETSet_ClosingTorque);
			if (TPE_EditIconActiveFlag === 0) {
				ETSet_EndTorque = ETSet_ClosingTorque;
				lclId.value = ETSet_EndTorque + " N-m";
				ETParam_ShowGetEndTorque();
				ETParamEntryStatus = ETPARAMENTRY_END_TORQUE_NEW;
			}
			else {
				if (ETSet_ClosingTorque >= ETSet_EndTorque) {
					ETSet_EndTorque = ETSet_ClosingTorque;
					lclId.value = ETSet_EndTorque + " N-m";
					ETParam_ShowGetEndTorque();
					ETParamEntryStatus = ETPARAMENTRY_END_TORQUE_NEW;
				}
				else {
					lclId.value = "";
					ETParam_ShowParamEntryComplete();
					document.getElementById('idTestParam').readOnly = true;
				}
			}
			break;

		case ETPARAMENTRY_END_TORQUE_NEW:
			Extract_ParameterToInteger(ItemId, ETSet_EndTorque);
			if (TPE_EditIconActiveFlag === 0) {
				lclId.value = ETSet_Cycles;
				ETParam_ShowGetCycles();
				ETParamEntryStatus = ETPARAMENTRY_TEST_CYCLES_NEW;
			}
			else {
				lclId.value = "";
				ETParam_ShowParamEntryComplete();
				document.getElementById('idTestParam').readOnly = true;
			}
			break;


		case ETPARAMENTRY_TEST_CYCLES_NEW:
			Extract_ParameterToInteger(ItemId, ETSet_Cycles);
			if (TPE_EditIconActiveFlag === 0) {
				lclId.value = ETSet_TestId;
				ETParam_ShowGetTestId();
			}
			else {
				lclId.value = "";
				ETParam_ShowParamEntryComplete();
				document.getElementById('idTestParam').readOnly = true;
			}
			break;

		case ETPARAMENTRY_TEST_ID_NEW:
			ETSet_TestId = lclId.value;
			if (ETSet_TestId.length > 0) {
				if (TPE_EditIconActiveFlag === 0) {
					lclId.value = ETSet_TestConductor;
					ETParam_ShowGetTest_Conductor();
				}
				else {
					lclId.value = "";
					ETParam_ShowParamEntryComplete();
					document.getElementById('idTestParam').readOnly = true;
				}
			}
			break;

		case ETPARAMENTRY_TEST_CONDUCTOR_NEW: //Since this is last parameter            
			ETSet_TestConductor = lclId.value;
			if (ETSet_TestConductor.length > 0) {
				lclId.value = "";
				ETParam_ShowParamEntryComplete();
				document.getElementById('idTestParam').readOnly = true;
			}
			break;


		case ETPARAMENTRY_AWAIT_USER_ACCEPTANCE:
			//alert("Came Here!!!");
			//AjaxStoreTestParameters(uirTestPressure, uirOpenRotation, frClosingTq, frEndTq, uirTestCycles, strrTestId, uirStrTestIdLen, strrTestCond, uirStrTestCondLen)
			ReentrantStoreTestParameters();
			break;
	}


	if (boolCanvasIncrementDecrementSliderShow === 0)
		incrementDecrementSliderShowFlagDeactivate();
	else
		incrementDecrementSliderShowFlagActivate();
	if (TPE_EditIconActiveFlag === 0)
		ETPARAMENTRY_showSelectedParameterCanvas(previousStatus);
	else
		ETPARAMENTRY_showSelectedParameterCanvas(ETPARAMENTRY_TEST_CONDUCTOR_NEW);
}


function ETConduct_ShowHideCanvas(canvasId) {
	var lclShowHide = 0;
	var lclString;
	switch (canvasId) {
		case 'canvasTestCondInterval':
			if (varTestCondInterval_sh === 0) {
				varTestCondInterval_sh = 1;
				lclShowHide = 1;
			}
			else {
				varTestCondInterval_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasTestComponent':
			if (varTestComponent_sh === 0) {
				varTestComponent_sh = 1;
				lclShowHide = 1;
			}
			else {
				varTestComponent_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasTestCycle':
			if (varTestCycle_sh === 0) {
				varTestCycle_sh = 1;
				lclShowHide = 1;
			}
			else {
				varTestCycle_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasGrInlet':
			if (varGrInlet_sh === 0) {
				varGrInlet_sh = 1;
				lclShowHide = 1;
			}
			else {
				varGrInlet_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasGrOutlet':
			if (varGrOutlet_sh === 0) {
				varGrOutlet_sh = 1;
				lclShowHide = 1;
			}
			else {
				varGrOutlet_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasGrTq':
			if (varGrTq_sh === 0) {
				varGrTq_sh = 1;
				lclShowHide = 1;
			}
			else {
				varGrTq_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasTestCondParam':
			if (varTestCondParam_sh === 0) {
				varTestCondParam_sh = 1;
				lclShowHide = 1;
			}
			else {
				varTestCondParam_sh = 0;
				lclShowHide = 0;
			}
			break;
		case 'canvasErrWindow':
			if (varErrWindow_sh === 0) {
				varErrWindow_sh = 1;
				lclShowHide = 1;
			}
			/*else
			 {
			 varErrWindow_sh = 0;
			 lclShowHide = 0;
			 }*/
			break;
		default:
			break;
	}
	if (lclShowHide === 1) {
		switch (canvasId) {
			case 'canvasTestCondInterval':
				drawCanvasRectangleWithFillColorAndBorder('canvasTestCondInterval', '#C7FF32', 'transparent', 5);
				if (CounterGageShownFlag === 0) {
					CounterGage = gage_LoadNew('divCntrGage', CyclesCounter, 0, ETSet_Cycles, 'Cycles', '', '#C1CEC7', '#C7FF32', '#C1CEC7', '#C7FF32');
					CounterGageShownFlag = 1;
				}
				else {
					unhideDiv('divCntrGage');
				}
				break;
			case 'canvasTestComponent':
				drawCanvasRectangleWithFillColorAndBorder('canvasTestComponent', '#C7FF32', 'transparent', 5);
				SetCanvasTextWithSpacing('canvasTestComponent', 'Inlet Isolating Valve:  ', 1, '100% Trebuchet MS', 35);	//Test Pressure	
				SetCanvasTextWithSpacing('canvasTestComponent', 'Inlet Venting Valve:    ', 2, '100% Trebuchet MS', 35); //OPen Rotation	    
				SetCanvasTextWithSpacing('canvasTestComponent', 'Outlet Exhaust Valve:   ', 3, '100% Trebuchet MS', 35); //Closing Torque	
				UpdateComponentStatus();
				break;

			case 'canvasTestCycle':
				drawCanvasRectangleWithFillColorAndBorder('canvasTestCycle', '#C7FF32', 'transparent', 5);
				UpdateCycleStatus();


				break;

			case 'canvasGrInlet':
				if (GrInletShownFlag === 0) {
					GrInletShownFlag = 1;
					ctxGrInlet = document.getElementById('cvsGrInlet').getContext('2d');
					//GrInlet= new Chart(ctxGrInlet).Line(GrInletconfig, {animationSteps: 1});
					GrInlet = new Chart(ctxGrInlet, GrInletconfig);
				}
				else {
					unhideDiv('divCvsGrInlet');
				}
				break;
			case 'canvasGrOutlet':
				if (GrOutletShownFlag === 0) {
					GrOutletShownFlag = 1;
					ctxGrOutlet = document.getElementById('cvsGrOutlet').getContext('2d');
					GrOutlet = new Chart(ctxGrOutlet, GrOutletconfig);
				}
				else {
					unhideDiv('divCvsGrOutlet');
				}
				break;
			case 'canvasGrTq':
				if (GrTorqueShownFlag === 0) {
					GrTorqueShownFlag = 1;
					ctxGrTorque = document.getElementById('cvsGrTq').getContext('2d');
					GrTorque = new Chart(ctxGrTorque, GrTqconfig);
				}
				else {
					unhideDiv('divCvsGrTq');
				}
				break;
			case 'canvasTestCondParam':
				drawCanvasRectangleWithFillColorAndBorder('canvasTestCondParam', '#C7FF32', 'transparent', 5);
				lclString = "Test Pressure: " + ETSet_Pressure.toString() + " bars";
				SetCanvasTextWithSpacing('canvasTestCondParam', lclString, 1, '100% Trebuchet MS', 25);	//Test Pressure

				lclString = "Open Rotation: " + ETSet_OpeningRotation.toString() + " Degrees";
				SetCanvasTextWithSpacing('canvasTestCondParam', lclString, 2, '100% Trebuchet MS', 25); //OPen Rotation

				lclString = "Closing Torque:	" + ETSet_ClosingTorque.toString() + " N-m";
				if (ETSet_EndTorque >= ETSet_ClosingTorque) {
					lclString += "->" + ETSet_EndTorque.toString() + " N-m";
					//alert("Came here!");
				}
				else {
					alert("Please check. End Torque should not be less than Closing Torque!");
				}
				SetCanvasTextWithSpacing('canvasTestCondParam', lclString, 3, '100% Trebuchet MS', 25); //Closing Torque

				lclString = "Test Cyles:    " + ETSet_Cycles.toString();
				SetCanvasTextWithSpacing('canvasTestCondParam', lclString, 4, '100% Trebuchet MS', 25); //Test Cycles			 
				break;

			case 'canvasErrWindow':
				//canvasSetBackgroundImage('canvasErrWindow',"url(../img/pagebg.jpg)");
				//ET_ErrorId = ET_ERROR_INSUFFICIENT_INLET_PRESSURE ;
				//ETParam_ShowError();		
				break;

			default:
				break;
		}
	}
	else {
		switch (canvasId) {
			case 'canvasTestComponent':
				canvasHide(canvasId);
				canvasHide('canvasInletIsoVlStat');
				canvasHide('canvasInletVentingVlStat');
				canvasHide('canvasOutletExhVlStat');
				break;

			case 'canvasTestCondInterval':
				canvasHide(canvasId);
				hideDiv('divCntrGage');
				break;

			case 'canvasTestCycle':
				canvasHide(canvasId);
				break;

			case 'canvasTestCondParam':
				canvasHide(canvasId);
				break;

			case 'canvasGrInlet':
				hideDiv('divCvsGrInlet');
				break;

			case 'canvasGrOutlet':
				hideDiv('divCvsGrOutlet');
				break;

			case 'canvasGrTq':
				hideDiv('divCvsGrTq');
				break;

			case 'canvasErrWindow':
				//canvasHide(canvasId);
				break;

			default:
				break;

		}
	}
}


function GenRpt_ShowDateSortStart() {
	SetCanvasHeader('canvasSortMenu', 'Enter Start Date:', 1, '200% Trebuchet MS');
	ViewGenRptStatus = ViewGenRptGetStartDate;
	//canvasKbdHide();
	//boolCanvasIncrementDecrementSliderShow = 1;
	//ETParamEntryStatus = ETPARAMENTRY_TESTPRESSURE_NEW;
	//canvasKbdHide();
	//slider_minv = 0; 
	//slider_maxv = 400;
	//slider_currv = 15;
	//slider_step = 1;
	//setupSlider();
}

function GenRpt_ShowDateSortEnd() {
	SetCanvasHeader('canvasSortMenu', 'Enter End Date:', 1, '200% Trebuchet MS');
	showDatePickerEnd();
	ViewGenRptStatus = ViewGenRptGetEndDate;
}


function GenRpt_ShowConductorNames() {
	SetCanvasHeader('canvasSortMenu', 'Enter Conductor Name:', 1, '200% Trebuchet MS');
}

function GenRpt_ShowTestNames() {
	SetCanvasHeader('canvasSortMenu', 'Enter Test Name:', 1, '200% Trebuchet MS');

}



function CoreGetBrowser() {
	return navigator ? navigator.userAgent.toLowerCase() : "other";
}


function StoreDelays() {

}

function RetrieveDelays() {

}



//AJAX Functions
function createAjaxRequest(strVarToDouble, secondVar) {

	//error: Error: [Exception... "Access to restricted URI denied" .... while calling $.ajax method
	//removed by Firefox
	//Go to about:config
	//Find security.fileuri.strict_origin_policy parameter
	//Set it to false

	//earlier the location was localhost/somethingsomething/testext.php
	//Copied the php file to local folder and tried
	//Got readystate 4 AND status 200
	//but was returning the entire file instead of result!!!

	var urlName = "testext.php?q=" + strVarToDouble + "&r=" + secondVar;
	//alert("Atleast function was called!");

	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.onreadystatechange = function () {
		//if(AjaxRequest.readyState === 2)
		//console.log("Readystate:" + AjaxRequest.readyState + "Status:" + AjaxRequest.status);
		//alert("Ätleast state Changed, Ready State = " + AjaxRequest.readyState + "Status" + AjaxRequest.status);
		//if(AjaxRequest.status === 404)
		//alert("This is the status:" + AjaxRequest.status);             
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			//alert("The Doubled result is: " + AjaxRequest.responseText);
		}

	};
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	//alert("Open and Send Command Passed!");

}

//Ajax Function to store the Test Parameters in a file
function AjaxStoreTestParameters(uirTestPressure, uirOpenRotation, frClosingTq, frEndTq, uirTestCycles, strrTestId, uirStrTestIdLen, strrTestCond, uirStrTestCondLen) {
	var urlName = "StoreTestParamV2.php?q=" + uirTestPressure + "&r=" + uirOpenRotation + "&s=" + frClosingTq + "&t=" + frEndTq + "&u=" + uirTestCycles + "&v=" + strrTestId + "&w=" + strrTestCond;
	//alert("PHP Query :" + urlName);
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200){
			//alert("Store Test Param Result is: " + AjaxRequest.responseText);
			vDB_responseReady = 1;
		}
	};
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	//alert("Open and Send Command Passed!");    
}

function AjaxRetrieveTestParameters() {
	var urlName = "RetrieveTestParam.php";
	var AjaxRequest;
	var lclString, subString;
	var lclPosnCntr;

	AjaxRequest = new XMLHttpRequest();

	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		//if(AjaxRequest.readyState === 2)
		//console.log("Readystate:" + AjaxRequest.readyState + "Status:" + AjaxRequest.status);
		//alert("Ätleast state Changed, Ready State = " + AjaxRequest.readyState + "Status" + AjaxRequest.status);
		//if(AjaxRequest.status === 404)
		//alert("This is the status:" + AjaxRequest.status);             
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			lclString = AjaxRequest.responseText;
			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			//alert("Split String:" + subString);
			ETSet_Pressure = parseInt(subString);
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			//alert("Split String:" + subString);
			ETSet_OpeningRotation = parseInt(subString);
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			//alert("Split String:" + subString);
			ETSet_ClosingTorque = parseFloat(subString);
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			//alert("Split String:" + subString);
			ETSet_EndTorque = parseFloat(subString);
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			//alert("Remaining String:" + lclString);
			ETSet_Cycles = parseInt(lclString);

			//alert("Retrieve Test Param Result is: " + AjaxRequest.responseText);
			//lclString = 
		}
	};

	//GetPhpValue('TestPr',ETSet_Pressure);
	//alert("Value of ETSet_Pressure is" + ETSet_Pressure);
}

function AjaxRetrieveTestParamFromDB(uirTestId) {
	var urlName = "RetrieveTestParamFromDB.php?i=" + uirTestId;
	var AjaxRequest;
	var lclString, subString;
	var lclPosnCntr;
	vDB_responseReady = 0;
	AjaxRequest = new XMLHttpRequest();

	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		lclString = AjaxRequest.responseText;

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		ETSet_Pressure = parseInt(subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		ETSet_OpeningRotation = parseInt(subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		ETSet_ClosingTorque = parseFloat(subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		ETSet_EndTorque = parseFloat(subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		lclPosnCntr = lclString.search(';');
		subString = lclString.slice(0, lclPosnCntr);
		//alert("Split String:" + subString);
		ETSet_Cycles = parseInt(subString);
		subString = subString + ';';
		lclString = lclString.replace(subString, '');

		//alert("Remaining String:" + lclString);
		ET_ResumeTestCompletedCycles = parseInt(lclString);
		//alert("Remaining String:" + lclString);
		vDB_responseReady = 1;
	}

}

function AjaxServoSetStatus(uirSrvo_DesDegOfRtn, uirDirnOfRtn, frSrvo_DesTq) {
	var urlName = "ServoSetStatus.php?R=" + uirSrvo_DesDegOfRtn + "&S=" + uirDirnOfRtn + "&T=" + frSrvo_DesTq;
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		//if(AjaxRequest.readyState === 2)
		//console.log("Readystate:" + AjaxRequest.readyState + "Status:" + AjaxRequest.status);
		//alert("Ätleast state Changed, Ready State = " + AjaxRequest.readyState + "Status" + AjaxRequest.status);
		//if(AjaxRequest.status === 404)
		//alert("This is the status:" + AjaxRequest.status);             
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {

		}
		//alert("Set Servo Status: " + AjaxRequest.responseText);
	};
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
}

function AjaxServoGetStatus() {
	//console.log("Function Called!");
	var urlName = "ServoGetStatus.php";
	var AjaxRequest;
	var lclString, subString;
	var lclPosnCntr;

	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();

	AjaxRequest.onreadystatechange = function () {
		console.log("Status:" + AjaxRequest.status);
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			lclString = AjaxRequest.responseText;
			//console.log("Get Status Response:" + lclString);

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			srvoActualTq = parseFloat(subString);
			subString = subString + ',';
			lclString = lclString.replace(subString, '');
			//console.log(" SubStr with Tq:" + lclString);
			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			srvoActualPosn = parseInt(subString);
			//console.log("This is srvoActualPosn:" + srvoActualPosn);
			//console.log(" SubStr with srvoActualPosn:" + lclString);

			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			//lclPosnCntr = lclString.search(',');
			//subString = lclString.slice(0, lclPosnCntr);
			//console.log("This is what is left of the string:" + lclString);
			srvoStatus = parseInt(lclString);
			//console.log("This is srvo Status" + srvoStatus);
		}
	};
}


function AjaxSerInterfaceSetDesiredStat(uiDesIsoValve, uiDesInletVentValve, uiDesOutletVentValve, uiCntRly, uiRstRly) {
	var urlName = "SerInterfaceSetDesiredStat.php?i=" + uiDesIsoValve + "&v=" + uiDesInletVentValve + "&o=" + uiDesOutletVentValve + "&c=" + uiCntRly + "&r=" + uiRstRly;
	var AjaxRequest;
	var lclString, subString;
	var lclPosnCntr;

	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		//console.log("Readystate:" + AjaxRequest.readyState + "Status:" + AjaxRequest.status);
		//alert("Ätleast state Changed, Ready State = " + AjaxRequest.readyState + "Status" + AjaxRequest.status);
		//if(AjaxRequest.status === 404)
		//alert("This is the status:" + AjaxRequest.status);             
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			lclString = AjaxRequest.responseText;
			//alert("Response:" + lclString);
			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vlInletIsolatingStat = parseInt(subString);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vlInletVentingStat = parseInt(subString);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vlOutletExhaustStat = parseInt(subString);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vInletPressureCurrentReading = parseInt(subString);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vOutletPressureCurrentReading = parseInt(subString);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vTqTempVal = parseFloat(subString);
			if (vTqTempVal < 100)
				vTqPositiveVal = vTqTempVal;
			if (vTqPositiveVal > vTqPeakPositiveVal)
				vTqPeakPositiveVal = vTqPositiveVal;

			//alert("Positive Tq Val:" + vTqPositiveVal);

			//Remove the extracted Substring
			subString = subString + ',';
			lclString = lclString.replace(subString, '');

			lclPosnCntr = lclString.search(',');
			subString = lclString.slice(0, lclPosnCntr);
			vTqTempVal = parseFloat(subString);

			//change negative to positive
			var vlclNeg;
			if (vTqTempVal < 0)
				vlclNeg = vTqTempVal * -1;
			else
				vlclNeg = vTqTempVal;
			if (vlclNeg < 100) {//indicates incorrect read value!!!
				//Fill the peak value
				if (vlclNeg > vTqPeakNegativeVal)
					vTqPeakNegativeVal = vlclNeg;
				//Fill regular value
				vTqNegativeVal = vTqTempVal;
			}
			//alert("Negative Tq Val:" + vTqNegativeVal);
		}
	};
	//alert("The URL Is:" + urlName);

}

function AjaxGetTestId(uiTestDate, uiTestMonth, uiTestYear, uiHour, uiMinute) {
	vDB_responseReady = 0;
	var urlName = "GetTestId.php?D=" + uiTestDate + "&M=" + uiTestMonth + "&Y=" + uiTestYear + "&H=" + uiHour + "&m=" + uiMinute;
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("This is the result:" + AjaxRequest.responseText);
			vTestId = parseInt(AjaxRequest.responseText);
			console.log("E::" + vTestId);
			vDB_responseReady = 1;
		}
	};
}

function AjaxUpdateTestStatus(uiTestId, uiDesiredStatus) {
	var urlName = "UpdateTestStatus.php?";
	console.log("Calling Ajax Update Test Status");
	var urlName = "UpdateTestStatus.php?q=" + uiTestId + "&r=" + uiDesiredStatus;
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Test Id Update Success");
		}
	};
}

function AjaxStoreTestRecord() {
	var urlName = "StoreTestRcd.php?";
	console.log("Calling Ajax Store Test Record");
	var date = new Date();
	vSampleCntr++;
	var urlName = "StoreTestRcd.php?b=" + vTestId + "&c=" + CyclesCounter + "&d=" + ET_Inlet_Pressure + "&e=" + ET_Outlet_Pressure + "&f=" + ETSet_UsedClosingTorque + "&g=" + vAppliedTq + "&h=" + vlInletIsolatingStat + "&i=" + vlInletVentingStat + "&j=" + vlOutletExhaustStat + "&k=" + srvoStatus + "&l=" + date.getDate() + "&m=" + (date.getMonth() + 1) + "&n=" + date.getFullYear() + "&o=" + date.getHours() + "&p=" + date.getMinutes() + "&q=" + date.getSeconds() + "&r=" + vSampleCntr;
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Store Test Record Complete");
		}
	};
}

function AjaxGetCountOfTestBetnDates(uiStartDate, uiStartMonth, uiStartYear, uiEndDate, uiEndMonth, uiEndYear) {
	vDB_responseReady = 0;
	vDB_RcdToGet = 1;
	var urlName = "GetTestCntByDate.php?d=" + uiStartDate + "&m=" + uiStartMonth + "&y=" + uiStartYear + "&D=" + uiEndDate + "&M=" + uiEndMonth + "&Y=" + uiEndYear;
	console.log("Calling AjaxGetCountOfTestBetnDates");
	console.log("URL Name:" + urlName);
	var AjaxRequest;
	//while(tryAgainCntr < 5){
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.timeout = 6000;
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			vDB_cnt = parseInt(AjaxRequest.responseText);
			alert("Get Count of Test Betn. Dates Complete:" + vDB_cnt);
			if (vDB_cnt > 0) {
				CursorModifyEntirePage('wait');
				clearTable('tblTestList');
				vDB_GetRcdDatesId = setInterval(GetRcdBetnDates, 5);
			}
			vDB_responseReady = 1;
		}
		else {
			//alert("sending the request again!");
		}
	};
}

function resizeTableArray(uirArrSize) {
	vDB_TestIdNum.length = uirArrSize;
	vDB_TestConductor.length = uirArrSize;
	vDB_TestIdStr.length = uirArrSize;
	vDB_TestDate.length = uirArrSize;
	vDB_Result.length = uirArrSize;
	vDB_srNo.length = uirArrSize;
	console.log("length of array:" + vDB_TestIdNum.length);

}

function AjaxGetSpecificRcdOfTestBetnDates(uiStartDate, uiStartMonth, uiStartYear, uiEndDate, uiEndMonth, uiEndYear, uiRcdNum) {
	vDB_responseReady = 0;
	var urlName = "GetTestRcdByDate.php?d=" + uiStartDate + "&m=" + uiStartMonth + "&y=" + uiStartYear + "&D=" + uiEndDate + "&M=" + uiEndMonth + "&Y=" + uiEndYear + "&r=" + uiRcdNum;
	console.log("Calling AjaxGetSpecificRcdOfTestBetnDates");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Get Sp. Rcd Test Betn. Dates Complete");
			vDB_str = AjaxRequest.responseText;
			vDB_responseReady = 1;
		}
	};
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();

}

function AjaxGetCountOfTestByConductors(strCondName) {
	vDB_responseReady = 0;
	vDB_RcdToGet = 1;
	var urlName = "GetTestCntByTestConductor.php?c=" + strCondName;
	console.log("Calling AjaxGetCountOfTestByConductors");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			vDB_cnt = parseInt(AjaxRequest.responseText);
			alert("Records by Conductor:" + vDB_cnt);
			if (vDB_cnt > 0) {
				clearTable('tblTestList');
				CursorModifyEntirePage('wait');
				vDB_GetRcdByConductor = setInterval(GetRcdByConductors, 10);
			}
			vDB_responseReady = 1;
		}
	};
	return retVar;

}
function AjaxGetSpecificRcdOfTestByConductors(strCondName, uirRcdNum) {
	vDB_responseReady = 0;
	//Get the Conductor name here
	lclID = document.getElementById('idTestParam');
	strCondName = lclID.value;
	var urlName = "GetTestRcdByTestConductor.php?c=" + strCondName + "&r=" + uirRcdNum;
	console.log("Calling AjaxGetSpecificRcdOfTestByConductors");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Get Sp. Rcd Test by conductor");
			vDB_str = AjaxRequest.responseText;
			console.log("Record by Conductor:" + vDB_str);
			vDB_responseReady = 1;
		}
	};

}

function AjaxGetCountOfTestById(strrTestId) {
	vDB_responseReady = 0;
	vDB_RcdToGet = 1;
	var urlName = "GetTestCntByTestName.php?c=" + strrTestId;
	console.log("Calling AjaxGetCountOfTestById");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			vDB_cnt = parseInt(AjaxRequest.responseText);
			alert("Count of rcds by conductor:" + vDB_cnt);
			if (vDB_cnt > 0) {
				clearTable('tblTestList');
				CursorModifyEntirePage('wait');
				vDB_GetRcdByTestId = setInterval(GetRcdByTestName, 10);
			}
			vDB_responseReady = 1;
		}
	};
}
function AjaxGetSpecificRcdOfId(strrTestId, uirRcdNum) {
	vDB_responseReady = 0;
	var urlName = "GetTestRcdByTestName.php?c=" + strrTestId + "&r=" + uirRcdNum;
	console.log("Calling AjaxGetSpecificRcdOfId");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Get Sp. Rcd by Test Id");
			vDB_str = AjaxRequest.responseText;
			console.log("Record by Test Id:" + vDB_str);
			vDB_responseReady = 1;
		}
	};
}
function AjaxGetCountOfIncompleteTests() {
	vDB_responseReady = 0;
	vDB_RcdToGet = 1;
	var urlName = "GetIncompleteTestCnt.php";
	console.log("Calling AjaxGetCountOfIncompleteTests");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			vDB_cnt = parseInt(AjaxRequest.responseText);
			console.log("Count of Incomplete Tests:" + vDB_cnt);
			if (vDB_cnt > 0) {
				console.log("This is the record to get" + vDB_RcdToGet);
				clearTable('tblTestList');
				CursorModifyEntirePage('wait');
				vDB_GetRcdIncompTest = setInterval(GetRcdIncompleteTest, 10);
			}
			vDB_responseReady = 1;
		}
	};
}
function AjaxGetSpecificRcdOfIncompleteTests(uirRcdNum) {
	vDB_responseReady = 0;
	var urlName = "GetIncompleteTestRcd.php?r=" + uirRcdNum;
	console.log("Calling AjaxGetSpecificRcdOfIncompleteTests");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Get Sp. Rcd of Incomplete Test");
			vDB_str = AjaxRequest.responseText;
			console.log("Specific Rcd of Incomp Test:" + vDB_str);
			//ToDo: Extract Individual Element
			ExtractTestParamsFromString(vDB_str, uirRcdNum);
			vDB_responseReady = 1;
		}
	};
}
function AjaxGenerateExcelRpt(uirTestId) {
	console.log("This is the test ID:" + uirTestId);
	vDB_responseReady = 0;
	var urlName = "GenExcel.php?i=" + uirTestId;
	console.log("Calling AjaxGenerateExcelRpt");
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("GenerateExcelRpt Complete");
			vDB_responseReady = 1;
		}
	};
}

function AjaxStoreTestToResumeData(uirTestPressure,uirOpenRotation,frClosingTq,frEndTq,uirTestCycles,ulTestId,ulCompletedCycles){
	vDB_responseReady = 0;
	var urlName = "storeResumeTestParams.php?q=" + uirTestPressure + "&r=" + uirOpenRotation + "&s=" + frClosingTq + "&t=" + frEndTq + "&u=" +  uirTestCycles + "&v=" + ulTestId + "&w=" + ulCompletedCycles;
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("AjaxStoreTestToResumeData Complete");
			vDB_responseReady = 1;
		}
	};
}
function AjaxRetrieveTestToResumeData(){
	vDB_responseReady = 0;
	var urlName = "RetrieveResumeTestParams.php";
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("AjaxRetrieveTestToResumeData Complete");
				lclString = AjaxRequest.responseText;
				
				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ETSet_Pressure = parseInt(subString);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');
		
				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ETSet_OpeningRotation = parseInt(subString);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');
		
				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ETSet_ClosingTorque = parseFloat(subString);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');
		
				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ETSet_EndTorque = parseFloat(subString);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');
		
				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ETSet_Cycles = parseInt(subString);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');

				lclPosnCntr = lclString.search(';');
				subString = lclString.slice(0, lclPosnCntr);
				console.log("Split String:" + subString);
				ET_ResumeTestCompletedCycles = parseInt(subString);
				console.log("ET_ResumeTestCompletedCycles:" + vTestId);
				subString = subString + ';';
				lclString = lclString.replace(subString, '');
		
				console.log("Remaining String:" + lclString);
				vTestId = parseInt(lclString);
				console.log("Test ID:" + vTestId);
				RetrieveTestParamOfTestToResume = ET_ResumeTestCompletedCycles;
				
				vDB_responseReady = 1;
		}
	};
}

function AjaxKillApp(){
	var urlName = "killApp.php";
	var AjaxRequest;
	AjaxRequest = new XMLHttpRequest();
	AjaxRequest.open("Get", urlName, true);
	AjaxRequest.send();
	AjaxRequest.onreadystatechange = function () {
		if (AjaxRequest.readyState === 4 && AjaxRequest.status === 200) {
			console.log("Termination Complete!");
		}
	}

}

function ExtractTestParamsFromString(stringToExtract, uirRcdNum) {
	var lclPosnCntr = 0;
	var lclString = stringToExtract;
	//Extract Test Id
	lclPosnCntr = lclString.search(';');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TestIdNum[uirRcdNum - 1] = parseInt(subString);
	vDBTableRow[5] = subString;
	vDBTableRow[0] = uirRcdNum;
	subString = subString + ';';
	lclString = lclString.replace(subString, '');
	//alert("vDB_TestIdNum" + (uirRcdNum - 1) + ":" + vDBTableRow[0]);
	//Extract Test Conductor
	lclPosnCntr = lclString.search(';');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TestIdStr[uirRcdNum - 1] = subString;
	vDBTableRow[1] = subString;
	subString = subString + ';';
	lclString = lclString.replace(subString, '');
	//alert("vDB_TestConductor" + (uirRcdNum - 1) + ":" + vDBTableRow[1]);
	//Extract Test Name
	lclPosnCntr = lclString.search(';');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TestConductor[uirRcdNum - 1] = subString;
	vDBTableRow[2] = subString;
	subString = subString + ';';
	lclString = lclString.replace(subString, '');
	//alert("vDB_TestIdStr" + (uirRcdNum - 1) + ":" + vDBTableRow[2]);
	//Extract Test Date
	lclPosnCntr = lclString.search(';');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TestDate[uirRcdNum - 1] = subString;
	vDBTableRow[3] = subString;
	subString = subString + ';';
	lclString = lclString.replace(subString, '');
	//alert("vDB_TestDate" + (uirRcdNum - 1) + ":" + vDBTableRow[3]);
	//alert("This is the left over string" + lclString);
	//Extract Test Result
	vDB_Result[uirRcdNum - 1] = lclString;
	vDBTableRow[4] = lclString;
	//alert("vDB_Result" + (uirRcdNum - 1) + ":" + vDBTableRow[4]);
}
function PrTransConvertCurrentToPressure(uirCurrentModbusReading) {
	var vlclPrReading;
	var vNegFlag = 0;

	if ((uirCurrentModbusReading & 0x8000) > 0) //indicates that number is negative
	{
		//alert("\nCame In...")
		vlclPrReading = uirCurrentModbusReading ^ 0xFFFF;
		//alert("vlclPrReading:" + vlclPrReading);
		vNegFlag = 1;
	}
	else
		vlclPrReading = uirCurrentModbusReading;
	//alert("vlclPrReading:" + vlclPrReading);
	dblPressure = vlclPrReading / 10;
	if (vNegFlag === 1)
		dblPressure = 0;
	//alert("\n Pressure:" + dblPressure)
	return dblPressure;
}

//Gage function for loading a new gage
function gage_LoadNew(rGageId, rCurrVal, rMinVal, rMaxVal, rStrTitle, rStrLabel, rTitleFontColor, rValueFontColor, rGageColor, rLevelColor) {
	var rGageVar;
	rGageVar = new JustGage({
		id: rGageId,
		value: rCurrVal,
		min: rMinVal,
		max: rMaxVal,
		title: rStrTitle,
		label: rStrLabel,
		titleFontColor: rTitleFontColor,
		valueFontColor: rValueFontColor,
		gaugeColor: rGageColor,
		customSectors: [{
			color: rLevelColor,
			lo: 0,
			hi: 400
		}]
		//levelColors: [rLevelColors1,rLevelColors2,rLevelColors3]
	});
	return rGageVar;
}


/*
function gage_CycleComplete()
{
    CounterGage = new JustGage({
          id: 'divCntrGage',
          value: 50,
          min: 0,
          max: 100,
          title: 'Cycles',
          label: ''
	  
        });
}
*/

//Set up Slider for Value Entry
function setupSlider() {
	$("#slider").slider({
		range: false,
		min: slider_minv,
		max: slider_maxv,
		value: slider_currv,
		step: 1,
		slide: function (event, ui) {
			ETParamEntrySliderAction();
		}
	});
}



/////////////TEST RELATED FUNCTIONS START HERE//////////////////////////////////

function CalculateInletPressure() {
	ET_Inlet_Pressure = PrTransConvertCurrentToPressure(vInletPressureCurrentReading);
	if (ET_Inlet_Pressure <= 0) {
		if (ET_Prev_Inlet_Pressure < 5)
			ET_Inlet_Pressure = 0;
		else
			ET_Inlet_Pressure = ET_Prev_Inlet_Pressure;

	}
	ET_Prev_Inlet_Pressure = ET_Inlet_Pressure;
	//alert("Inlet Pressure is:" + ET_Inlet_Pressure);


}

function CalculateOutletPressure() {
	ET_Outlet_Pressure = PrTransConvertCurrentToPressure(vOutletPressureCurrentReading);
	//alert("Outlet Pressure is:" + ET_Outlet_Pressure);
	if (ET_Outlet_Pressure <= 0) {
		if (ET_Prev_Outlet_Pressure < 5)
			ET_Outlet_Pressure = 0;
		else
			ET_Outlet_Pressure = ET_Prev_Outlet_Pressure;
	}
	ET_Prev_Outlet_Pressure = ET_Outlet_Pressure;
}

function ValidatePressure(vActualPressure, vSetPressure, vPercentPositiveTolerance, vPercentNegativeTolerance) {
	var vMaxPositivePressure;
	var vMaxNegativePressure;
	var vPressureReturnVal = PRESSURE_OK;

	vMaxPositivePressure = (vSetPressure + (vSetPressure * vPercentPositiveTolerance / 100));
	vMaxNegativePressure = (vSetPressure - (vSetPressure * vPercentNegativeTolerance / 100));

	if (vActualPressure > vMaxPositivePressure) {
		vPressureReturnVal = PRESSURE_MORE;
	}
	if (vActualPressure < vMaxNegativePressure) {
		vPressureReturnVal = PRESSURE_LESS;
	}

	return vPressureReturnVal;
}

function ExecuteEnduranceTest() {
	var vReturnVal;
	switch (EnduranceTestExecuteCurrrentStat) {
		case ETTEST_UNKNOWN:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vSampleCntr = 0;	//Reset the sample counter
			vDlyCntr = 0;   //Reset Delay	    
			ETSet_UsedClosingTorque = ETSet_ClosingTorque;
			vTqMaxTolerance = (ETSet_UsedClosingTorque * 3) / 100;
			//alert("Used Closing:" + ETSet_UsedClosingTorque);
			//alert("Set Closing Torque:" + ETSet_ClosingTorque);
			//alert("Max Tolerance:" + vTqMaxTolerance);
			EnduranceTestExecuteCurrrentStat = ETTEST_INIT_BEGIN;
			break;

		case ETTEST_INIT_BEGIN:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;   //Reset Delay
			strET_Test_Status = "Test Initialization in Progress";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_INIT_DEPRESSURE_BEGIN;
			break;

		case ETTEST_INIT_DEPRESSURE_BEGIN:
			vCycleInProgress = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_INIT_DEPRESSURE_AWAIT;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 1;
			vDlyCntr = 0;   //Reset Delay	    
			break;

		case ETTEST_INIT_DEPRESSURE_AWAIT:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 1;
			vDlyCntr++;   //Increment Delay
			if (vDlyCntr > vInitDepressurizationInterval) {
				EnduranceTestExecuteCurrrentStat = ETTEST_INIT_DEPRESSURE_COMPLETE;
				vDlyCntr = 0;
			}
			break;

		case ETTEST_INIT_DEPRESSURE_COMPLETE:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;//Reset Delay
			vET_Return_Status = ETTEST_PREPARE_TEST_APPLY_INLET;
			vET_Tq_InitialCalDone = 0;
			ET_ServoMechErrorCntr = 0;
			vTqCalCntr = 0;
			strET_Test_Status = "Torque Calibration In Progress";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_CAL;
			//EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_APPLY_INLET;
			break;

		case ETTEST_PREPARE_TEST_TORQUE_CAL:
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vCycleInProgress = 0;
			if (vTqCalCntr < 15) {
				AjaxServoGetStatus();
				//console.log("Point where error gen:" + srvoStatus);
				if (srvoStatus != SERVO_CMD_STAT_ERR) {
					//First Check if this is the first calibration or Torque Modification cal!
					if (vET_Tq_InitialCalDone === 0) {//This indicates that this is the first cycle or the cycle is resumed from a cold start!
						vAppliedTq = ETSet_UsedClosingTorque - (ETSet_UsedClosingTorque / 5);
						vET_Tq_InitialCalDone = 1;
					}
					else {//This indicates that torque Modification is in progress!
						if (vTqPeakNegativeVal > ETSet_UsedClosingTorque) {
							//alert("Seems More Torque was applied!" + "\nPeak Neg Tq:" + vTqPeakNegativeVal + "\n Set Negative Tq:" + ETSet_UsedClosingTorque);
							if (vTqPeakNegativeVal - ETSet_UsedClosingTorque > vTqMaxTolerance) {
								//alert("Torque Modification is required");
								var diff;
								diff = vTqPeakNegativeVal - ETSet_UsedClosingTorque;
								if (diff > 5) {
									alert("Too large a difference! No point in making adjustments!");
								}
								else {
									//alert("Decreasing the pgmd Tq Value" + "\nvAppliedTq" + vAppliedTq + "\nETSet_UsedClosingTorque" + ETSet_UsedClosingTorque);
									//vAppliedTq = ETSet_UsedClosingTorque - (vTqPeakNegativeVal - ETSet_UsedClosingTorque);
									vAppliedTq = vAppliedTq - ((vTqPeakNegativeVal - ETSet_UsedClosingTorque) / 2);
								}
							}
							else {
								EnduranceTestExecuteCurrrentStat = vET_Return_Status;
							}
						}
						if (vTqPeakNegativeVal < ETSet_UsedClosingTorque) {
							//alert ("Seems Less Torque was applied!");
							if (ETSet_UsedClosingTorque - vTqPeakNegativeVal > vTqMaxTolerance) {
								//alert("Torque Modification is required");
								var diff2;
								diff2 = (ETSet_ClosingTorque - vTqPeakNegativeVal);
								if (diff2 > 5) {
									//alert("Too large a difference! No point in making adjustments!");
								}
								else {
									//alert("Increasing the pgmd Tq Value");
									//vAppliedTq = ETSet_UsedClosingTorque + (vTqPeakNegativeVal - ETSet_ClosingTorque);
									vAppliedTq = vAppliedTq + ((ETSet_UsedClosingTorque - vTqPeakNegativeVal) / 2);
								}
							}
							else {
								EnduranceTestExecuteCurrrentStat = vET_Return_Status;
							}

						}
						if (vTqPeakNegativeVal === ETSet_UsedClosingTorque) {
							EnduranceTestExecuteCurrrentStat = vET_Return_Status;
						}
					}
					//Reset the values of Peak torque Values
					vTqPeakPositiveVal = 0;
					vTqPeakNegativeVal = 0;
					if (EnduranceTestExecuteCurrrentStat !== vET_Return_Status) {
						AjaxServoSetStatus((ETSet_OpeningRotation * 4), CW, vAppliedTq);//IF 360 closing pgmd, it will try and go to 360*4 to close the valve!
						vServoDelayCntr = 0;
						EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_MONITOR_SRVO_BEGIN;
					}
				}
				else {//Declare an Error
					//EnduranceTestExecuteCurrrentStat = ;
					//alert("AAA");
					ET_ErrorId = ET_ERROR_SERVO_MECHANISM;
					ET_ServoMechErrorCntr++;
					ET_ShowHideError();
					//alert("\n Error!!!");
				}
			}
			else {
				ET_ErrorId = ET_ERROR_CALIBRATION_FAILURE;
				ET_ShowHideError();
			}
			break;
		case ETTEST_PREPARE_TEST_TORQUE_MONITOR_SRVO_BEGIN:
			vServoDelayCntr++;
			if (srvoStatus != SERVO_CMD_STAT_COMPLETED) {
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_MONITOR;
				vServoDelayCntr = 0;
			}
			if (vServoDelayCntr > 10) {	//Indicates that for last 5 seconds no movement detected! -> could mean that valve was already closed!
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_MONITOR;
				vServoDelayCntr = 0;
			}
			break;

		case ETTEST_PREPARE_TEST_TORQUE_MONITOR:
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vCycleInProgress = 0;
			vServoDelayCntr++;
			/*
			if(vServoDelayCntr > 0){
				AjaxServoGetStatus();
				console.log("SerVo Status:" + srvoStatus);
			}
			*/

			if (vServoDelayCntr > 5)   //ToDo: Servo Timeout Error
			{
				//alert("Servo Time Out" + srvoStatus);
				//alert("Peak Negative Tq:" + vTqPeakNegativeVal);
				//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_INCH_CMD;
				AjaxServoGetStatus();
				if (srvoStatus === SERVO_CMD_STAT_COMPLETED) {
					EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE;
					//alert("DDDDD");
				}
				if (vServoDelayCntr > 100) {
					//alert("Timeout Detected!");
					//alert("BBB");
					ET_ErrorId = ET_ERROR_SERVO_MECHANISM;
					ET_ServoMechErrorCntr++;
					ET_ShowHideError();
				}
			}

			//}

			break;
		case ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE:
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vCycleInProgress = 0;
			vTqCalCntr++;
			AjaxServoSetStatus(ETSet_OpeningRotation, ACW, ETSet_ClosingTorque + 10);
			vServoDelayCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_MONITOR;
			break;

		case ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_CMD_ACC:
			AjaxServoGetStatus();
			vServoDelayCntr++;
			if (srvoStatus != SERVO_CMD_STAT_COMPLETED) {
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_MONITOR;
			}
			if (vServoDelayCntr > 10) {
				vServoDelayCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_MONITOR;
			}
			break;

		case ETTEST_PREPARE_TEST_TORQUE_OPEN_VALVE_MONITOR:
			vCycleInProgress = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vServoDelayCntr++;
			AjaxServoGetStatus();
			if (vServoDelayCntr > 2) {
				if (srvoStatus === SERVO_CMD_STAT_COMPLETED) {
					//alert("Completion Detected!");
					EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_CAL;
				}
				else {
					if ((srvoStatus === SERVO_CMD_STAT_ERR) || (vServoDelayCntr > 100)) {
						//alert("CCC");
						ET_ErrorId = ET_ERROR_SERVO_MECHANISM;
						ET_ServoMechErrorCntr++;
						ET_ShowHideError();
					}
				}
			}
			break;
		case ETTEST_PREPARE_TEST_APPLY_INLET:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			strET_Test_Status = "Applying Inlet Pressure..";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_AWAIT_INLET_APPLICATION_DLY;
			break;

		case ETTEST_PREPARE_TEST_AWAIT_INLET_APPLICATION_DLY:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vDlyCntr++;   //Increment Delay
			if (vDlyCntr > vValveInletPrApplicationInterval) {
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_VALID_ACTION;
			}
			break;

		case ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_VALID_ACTION:
			vCycleInProgress = 0;
			vDlyCntr = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//Important Step: Torque Values being filled here
			ETSet_UsedClosingTorque = ETSet_ClosingTorque;
			//This is commented because now the torque value is already calibrated!
			//vAppliedTq = ETSet_UsedClosingTorque;
			vReturnVal = ValidatePressure(ET_Inlet_Pressure, ETSet_Pressure, 5, 25);
			//alert("This is the return Val of Validate Pressure" + vReturnVal);
			if ((vReturnVal === PRESSURE_OK) || (vReturnVal === PRESSURE_MORE)) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_CLOSE;
			}
			else //PRESSURE_LESS
			{
				ET_InsufficientInletPressureCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_INVALID_ACTION;
			}

			break;

		case ETTEST_PREPARE_TEST_AWAIT_DLY_COMPLETE_INVALID_ACTION:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//alert("Insufficient Inlet Pressure Detected. Please Take Remedial Action");
			//show insufficient inlet Pressure interval
			ET_InsufficientInletPressureCntr++;	//Show half of this value to indicate low pressure interval
			vReturnVal = ValidatePressure(ET_Inlet_Pressure, ETSet_Pressure, 5, 25);

			//*****************************************************************************************************************************
			//
			//Debug: Remove Later! Allowed to let the test go through!
			DelMeCntr++;
			if (DelMeCntr > 30) {
				DelMeCntr = 0;
				vReturnVal = PRESSURE_OK;
			}
			if ((vReturnVal === PRESSURE_OK) || (vReturnVal === PRESSURE_MORE)) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_CLOSE;
				ET_ErrorId = 0;
			}
			else {//indicates that there is insufficient pressure!
				ET_ErrorId = ET_ERROR_INSUFFICIENT_INLET_PRESSURE;
			}
			ET_ShowHideError();
			/*
			if(ET_ErrorId !== 0)
			ETParam_ShowError();
			else
			canvasHide('canvasErrWindow');
			*/
			break;

		case ETTEST_EXEC_MONITOR_VALVE_CLOSE:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			if (CounterDisplayActivated === 1) {
				vlCntrRlyDesired = 1;
				CounterDisplayActivated = 0;
			}
			else
				vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			strET_Test_Status = "Closing Test Valve";
			vET_TestStatusUpdateStausFlag = 1;
			AjaxServoGetStatus();
			if (srvoStatus != SERVO_CMD_STAT_ACCEPTED) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_CLOSE_STD_ACTION;
			}
			else {
				//alert("This is the status at Closing:" + srvoStatus);
				//alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				//alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				//alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				break;
			}


		case ETTEST_EXEC_VALVE_CLOSE_STD_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;


			//vAppliedTq = ETSet_UsedClosingTorque;
			if (CyclesCounter > 0) {//Previous cycle completed
				//alert("Torque Modification being done!");
				//alert("Peak Positive Tq:" + vTqPeakPositiveVal);
				//alert("Peak Negative Tq:" + vTqPeakNegativeVal);

				if (vTqPeakNegativeVal > ETSet_UsedClosingTorque) {
					//alert("Seems More Torque was applied!" + "\nPeak Neg Tq:" + vTqPeakNegativeVal + "\n Set Negative Tq:" + ETSet_UsedClosingTorque);
					if (vTqPeakNegativeVal - ETSet_UsedClosingTorque > vTqMaxTolerance) {
						//alert("Torque Modification is required");
						var diff;
						diff = vTqPeakNegativeVal - ETSet_UsedClosingTorque;

						if (diff > 5) {
							alert("Too large a difference! No point in making adjustments!");
						}
						else {
							//alert("Decreasing the pgmd Tq Value" + "\nvAppliedTq" + vAppliedTq + "\nETSet_UsedClosingTorque" + ETSet_UsedClosingTorque);
							//vAppliedTq = ETSet_UsedClosingTorque - (vTqPeakNegativeVal - ETSet_UsedClosingTorque);
							vAppliedTq = vAppliedTq - ((vTqPeakNegativeVal - ETSet_UsedClosingTorque) * 0.8);
						}
					}
					else {
						//alert("Torque Modification is not required!");
					}
				}
				if (vTqPeakNegativeVal < ETSet_UsedClosingTorque) {
					//alert ("Seems Less Torque was applied!");
					if (ETSet_UsedClosingTorque - vTqPeakNegativeVal > vTqMaxTolerance) {
						//alert("Torque Modification is required");
						var diff2;
						diff2 = (ETSet_ClosingTorque - vTqPeakNegativeVal);
						if (diff2 > 5) {
							//alert("Too large a difference! No point in making adjustments!");
						}
						else {
							//alert("Increasing the pgmd Tq Value");
							//vAppliedTq = ETSet_UsedClosingTorque + (vTqPeakNegativeVal - ETSet_ClosingTorque);
							vAppliedTq = vAppliedTq + ((ETSet_UsedClosingTorque - vTqPeakNegativeVal) * 0.8);
						}
					}
					else {
						//alert("Torque Modification is not required!");
					}

				}

				//Reset the values of Peak torque Values
				vTqPeakPositiveVal = 0;
				vTqPeakNegativeVal = 0;
			}
			//alert("This is the Value Being Sent to the Servo:" + vAppliedTq);
			//AjaxServoSetStatus(ETSet_OpeningRotation,CW,ETSet_ClosingTorque);
			vServoDelayCntr = 0;
			AjaxServoSetStatus((ETSet_OpeningRotation + (ETSet_OpeningRotation / 2)/**80/100*/), CW, vAppliedTq);
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_CLOSE_MONITOR_BEGIN;
			break;

		case ETTEST_EXEC_VALVE_CLOSE_MONITOR_BEGIN:
			AjaxServoGetStatus();
			vServoDelayCntr++;
			if (srvoStatus != SERVO_CMD_STAT_COMPLETED) {
				tqAquireDelayCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_CLOSE_MONITOR;
			}
			if (vServoDelayCntr > 10) {
				tqAquireDelayCntr = 0;
				vServoDelayCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_CLOSE_MONITOR;
			}

			break;

		case ETTEST_EXEC_VALVE_CLOSE_MONITOR:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;

			vServoDelayCntr++;
			AjaxServoGetStatus();
			console.log("Servo Status:" + srvoStatus);
			console.log("vServoDelayCntr:" + vServoDelayCntr);
			if ((srvoStatus === SERVO_CMD_STAT_COMPLETED) || (vServoDelayCntr > 200)) {
				//console.log("Servo Status:" + srvoStatus);
				//console.log("vServoDelayCntr:" + vServoDelayCntr);
				//console.log("Peak Neg. Tq:" + vTqPeakNegativeVal);
				if (vTqPeakNegativeVal > (0.8 * ETSet_UsedClosingTorque))
					EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_BEGIN;
				else {//Indicates Closing Mechanism Failed!
					tqAquireDelayCntr++;
					if (tqAquireDelayCntr > 4) {
						EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_CLOSE;
						//alert("DDD");
						ET_ErrorId = ET_ERROR_SERVO_MECHANISM;
						ET_ServoMechErrorCntr++;
						ET_ShowHideError();
					}
				}
			}

			break;
		case ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_BEGIN:
			vCycleInProgress = 1;
			vDlyCntr = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			strET_Test_Status = "Monitoring External Leakage";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_MONITOR;

			break;
		case ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_MONITOR:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr++;
			if (vDlyCntr > vChargedOutletPressureMonitorInterval) {
				vDlyCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_INTERVAL_COMP_ACTION;
			}
			break;
		case ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_INTERVAL_COMP_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//vReturnVal = ValidatePressure(ET_Outlet_Pressure,ET_Inlet_Pressure,2,4);
			if ((ET_Outlet_Pressure - ET_Inlet_Pressure) > 10) {//Error Condition Jig/Seat Leakage
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_ERROR_ACTION;
				ET_ErrorId = ET_ERROR_JIG_SEAT_LEAKAGE;
				ET_JigLeakageCntr = 0;
			}
			else {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_NORMAL_ACTION;
			}
			break;
		case ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_NORMAL_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_DISCHARGE_BEGIN;
			break;
		case ETTEST_EXEC_MONITOR_CHARGED_OUTLET_PR_ERROR_ACTION:
			vCycleInProgress = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			ET_JigLeakageCntr++;
			if (ET_JigLeakageCntr < 15) {
				vlInletIsolatingDesired = 0;
				vlIntletVentingDesired = 1;
				vlOutletExhaustDesired = 1;
			}
			else {
				vlInletIsolatingDesired = 0;
				vlIntletVentingDesired = 0;
				vlOutletExhaustDesired = 0;
			}
			ET_ShowHideError();
			break;
		case ETTEST_EXEC_DISCHARGE_BEGIN:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			strET_Test_Status = "Venting Outlet Pressure";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_DISCHARGE_INTERVAL_AWAIT;
			//alert("Q");
			break;
		case ETTEST_EXEC_DISCHARGE_INTERVAL_AWAIT:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr++;
			if (vDlyCntr > vChargedOutletDischargeInterval)
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_DISCHARGE_INTERVAL_COMPLETE;
			//alert("R");
			break;
		case ETTEST_EXEC_DISCHARGE_INTERVAL_COMPLETE:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_BEGIN;
		//alert("S");
		//break;
		case ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_BEGIN:
			vCycleInProgress = 1;
			vDlyCntr = 0;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			strET_Test_Status = "Monitoring Internal Leakage";
			vET_TestStatusUpdateStausFlag = 1;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_MONITOR;
			//alert("Y");
			break;
		case ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_MONITOR:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr++;
			if (vDlyCntr > vDischargedOutletMonitorInterval) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_INTERVAL_COMP_ACTION;
			}
			//alert("Z");
			break;
		case ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_INTERVAL_COMP_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			if (ET_Outlet_Pressure <= 5)
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_NORMAL_ACTION;
			else
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_ERROR_ACTION;
			/*
			if(CyclesCounter === 2 || CyclesCounter === 4 || CyclesCounter === 6 || CyclesCounter === 8 || CyclesCounter === 10)
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_ERROR_ACTION;
			else
			*/
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_NORMAL_ACTION;

			break;
		case ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_NORMAL_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_OPEN_VALVE_BEGIN;
			//alert("V");
			break;
		case ETTEST_EXEC_MONITOR_DISCHARGED_OUTLET_PR_ERROR_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			strET_Test_Status = "Torque Modification in Progress";
			vET_TestStatusUpdateStausFlag = 1;
			//This is a critical stage. It indicates that a> either the valve is leaking or b> Insufficient torque has been applied!!
			//Actions to be taken:
			//a. Set a flag to not increment the cycle counter... this cycle is to be ignored.....Done! 
			//b. Increase the value of torque to be applied by 5%
			//c. Increment a counter to indicate the number of consequtive torque increments.
			//d. If the counter has exceeded say 10 steps then declare an error: Seat Leakage Error

			//***************DEBUG!!!!!!*******************************
			//ET_DoNotIncrementCycleCntrFlag = 1;


			//DEBUG:::commented on 2607 for testing of applied tq!!!

			ET_TorqueIncrementPercentage = ET_TorqueIncrementPercentage + 5;
			if (ET_TorqueIncrementPercentage > 50) {
				//Declare Error!! Seat Leakage Error
				//ADITYA COME HERE!!!
				alert("Torque has been increased by 50% of the set Torque and yet leakage is detected.\n Possible Reasons: \n 1. Incorrect value of Torque was fed in. \n 2. Test Piece Failure");
			}
			else {
				ETSet_UsedClosingTorque = (ETSet_ClosingTorque * (ET_TorqueIncrementPercentage / 100)) + ETSet_ClosingTorque;
				EnduranceTestExecuteCurrrentStat = ETTEST_PREPARE_TEST_TORQUE_CAL;
				vET_Return_Status = ETTEST_EXEC_VALVE_OPEN_STD_ACTION;
				//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_OPEN_VALVE_BEGIN;
				//Reset the values of Peak torque Values
				vTqPeakPositiveVal = 0;
				//vTqPeakNegativeVal = vAppliedTq;
				//vAppliedTq = vAppliedTq + (vAppliedTq/20);
			}
			alert("This is the modified Torque:" + ETSet_UsedClosingTorque);

			//Remove this when removing comments on top!!!
			//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_OPEN_VALVE_BEGIN;
			break;

		case ETTEST_EXEC_OPEN_VALVE_BEGIN:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			AjaxServoGetStatus();
			strET_Test_Status = "Opening Test Valve";
			vET_TestStatusUpdateStausFlag = 1;

			if (srvoStatus === SERVO_CMD_STAT_COMPLETED || srvoStatus === SERVO_CMD_STAT_UNKNOWN) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN;
				//alert("Servo Status" + srvoStatus);
			}
			else {
				alert("This is the servo status" + srvoStatus);
				//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN_ERROR_ACTION;
				alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				//alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				//alert("The Servo is in an unexpected status. \nPlease check if Error is displayed on the servo!\n Exiting and Restarting the test may resolve the issue");
				break;
			}


		case ETTEST_EXEC_VALVE_OPEN:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//alert("B");
			AjaxServoSetStatus(ETSet_OpeningRotation, ACW, ETSet_ClosingTorque + 10);
			vServoDelayCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_OPEN;
		//break;
		case ETTEST_EXEC_MONITOR_VALVE_OPEN_BEGIN:
			AjaxServoGetStatus();
			vServoDelayCntr++;
			if (srvoStatus != SERVO_CMD_STAT_COMPLETED)
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_OPEN;
			if (vServoDelayCntr > 10) {
				vServoDelayCntr = 0;
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_OPEN;
			}
			break;
		case ETTEST_EXEC_MONITOR_VALVE_OPEN:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			AjaxServoGetStatus();
			if (srvoStatus === SERVO_CMD_STAT_COMPLETED)
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN_STD_ACTION;
			else {
				vServoDelayCntr++;
				if ((srvoStatus === SERVO_CMD_STAT_ERR) || (vServoDelayCntr > 44))   //ToDo: Servo Error Detected
				{
					if ((ET_Outlet_Pressure - ET_Inlet_Pressure) > 10)
						EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN_ERROR_ACTION;
					else
						EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN_STD_ACTION;
					ET_ValveOpenErrCntr = 0;
				}
			}
			break;
		case ETTEST_EXEC_VALVE_OPEN_ERROR_ACTION:
			vCycleInProgress = 1;
			ET_ValveOpenErrCntr++;
			if (ET_ValveOpenErrCntr > 15) {
				vlInletIsolatingDesired = 0;
				vlIntletVentingDesired = 0;
				vlOutletExhaustDesired = 0;
			}
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//Declare Error:  Spindle Jammed!!!
			ET_ErrorId = ET_ERROR_VALVE_OPEN;
			ET_ShowHideError();
			//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_VALVE_OPEN_STD_ACTION;	    
			break;
		case ETTEST_EXEC_VALVE_OPEN_STD_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_BEGIN;
			//alert("Q1");
			break;
		case ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_BEGIN:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr++;
			strET_Test_Status = "Temperature Stabilization/Resting";
			vET_TestStatusUpdateStausFlag = 1;
			if (vDlyCntr > vValveOpenTimeoutInterval) {
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_MONITOR;
			}
			//alert("Q2");
			break;

		case ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_MONITOR:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vReturnVal = ValidatePressure(ET_Outlet_Pressure, ET_Inlet_Pressure, 2, 10);
			//if((vReturnVal === PRESSURE_OK) || (vReturnVal === PRESSURE_MORE))
			//{
			EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_NORMAL_ACTION;
			//}
			//else
			//{		
			//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_ERROR_ACTION;		
			//ET_ValveOpenCntr = 0;
			//}

			//alert("Q3");
			break;

		//case ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_INTERVAL_COMP_ACTION:
		//vlInletIsolatingDesired = 1;
		//vlIntletVentingDesired = 0;
		//vlOutletExhaustDesired = 0;	    
		//EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_NORMAL_ACTION;
		//alert("A");
		//break;

		case ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_NORMAL_ACTION:
			vCycleInProgress = 1;
			vlInletIsolatingDesired = 1;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			if (ET_DoNotIncrementCycleCntrFlag === 0) //indicates that this cycle has to be accounted for!!!
			{
				CyclesCounter++;
				vlCntrRlyDesired = 1;
				CounterDisplayActivated = 1;
				//Store the last cycle interval in this variable
				vLastCycleInterval = vCurrrentCycleInterval;
				vCurrrentCycleInterval = 0;
				vAverageCycleInterval = vTestInterval / CyclesCounter;
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_CLOSE;   //Check if this is correct!!!    
				if (CyclesCounter >= ETSet_Cycles)   //Indicates that the test is complete!!
				{
					EnduranceTestExecuteCurrrentStat = ETTEST_CYCLE_COMPLETE_BEGIN;
				}
			}
			else {

				ET_DoNotIncrementCycleCntrFlag = 0; //Reset the flag!!
				EnduranceTestExecuteCurrrentStat = ETTEST_EXEC_MONITOR_VALVE_CLOSE;   //Check if this is correct!!!
			}
			//alert("Q4");	    
			break;
		case ETTEST_EXEC_MONITOR_OPEN_CHANNEL_OUTLET_PR_ERROR_ACTION:
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vCycleInProgress = 0;
			ET_ErrorId = ET_ERROR_JIG_LKG_OR_SPINDLE_JAM;
			ET_JigSpindleCntr++;
			ET_ShowHideError();
			if (ET_JigSpindleCntr < 20) {
				vlInletIsolatingDesired = 0;
				vlIntletVentingDesired = 1;
				vlOutletExhaustDesired = 1;
			}
			else {
				vlInletIsolatingDesired = 0;
				vlIntletVentingDesired = 0;
				vlOutletExhaustDesired = 0;
			}

			//ET_ValveOpenCntr++;
			//alert("Q5");
			//Show Error Message Open Mechanism Error 
			break;

		case ETTEST_EMERGENCY_STOP_BEGIN:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_EMERGENCY_STOP_MONITOR;
			vEmergencyStopFlag = 0;
			//alert("Q6");
			break;

		case ETTEST_EMERGENCY_STOP_MONITOR:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vDlyCntr++;
			if (vDlyCntr > vEmergencyStopInterval)
				EnduranceTestExecuteCurrrentStat = ETTEST_EMERGENCY_STOP_COMPLETE;
			break;

		case ETTEST_EMERGENCY_STOP_COMPLETE:
			vCycleInProgress = 0;
			vDlyCntr = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			ET_EmergencyStopCntr++;
			//Show Error Message Emergency Stop Message. 
			//alert("Q8");
			break;

		case ETTEST_CYCLE_COMPLETE_BEGIN:
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			EnduranceTestExecuteCurrrentStat = ETTEST_CYCLE_COMPLETE_MONITOR;
			//alert("Q9");
			break;

		case ETTEST_CYCLE_COMPLETE_MONITOR:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 1;
			vlOutletExhaustDesired = 1;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr++;
			if (vDlyCntr > vEmergencyStopInterval) {
				EnduranceTestExecuteCurrrentStat = ETTEST_CYCLE_COMPLETE_COMPLETE;
			}
			//alert("Q10");
			break;

		case ETTEST_CYCLE_COMPLETE_COMPLETE:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			vDlyCntr = 0;
			//Show Message of Test Complete	    
			//alert("Q11");
			break;


		default:
			vCycleInProgress = 0;
			vlInletIsolatingDesired = 0;
			vlIntletVentingDesired = 0;
			vlOutletExhaustDesired = 0;
			vlCntrRlyDesired = 0;
			vlRstRlyDesired = 0;
			//alert("A");
			EnduranceTestExecuteCurrrentStat = ETTEST_UNKNOWN;
			break;
	}
	//console.log(EnduranceTestExecuteCurrrentStat);
	UpdateValveStatus();
	ETConduct_ShowHideCanvas('canvasErrWindow');
	OutletPrGauge.refresh(ET_Outlet_Pressure);
	InletPrGauge.refresh(ET_Inlet_Pressure);
	var VGaugeTq = 0;
	VGaugeTq = Math.round(vTqPeakNegativeVal * 100);
	VGaugeTq = (VGaugeTq * -1 / 100);
	TqGauge.refresh(VGaugeTq);
	//x = x + 2;
	//y = y + 1;

	ET_SampleCntr++;
	console.log("ETStatus:" + EnduranceTestExecuteCurrrentStat);

	//ET_Inlet_Pressure = ET_Inlet_Pressure + 4;
	//ET_Outlet_Pressure = ET_Outlet_Pressure + 2;
	//ET_Tq = ET_Tq + 1;

	CalculateInletPressure();
	CalculateOutletPressure();
	AjaxStoreTestRecord();

	if (vEmergencyStopFlag === 1)
		EnduranceTestExecuteCurrrentStat = ETTEST_EMERGENCY_STOP_BEGIN;
	if (varGrInlet_sh === 1)
		GraphInletAdd();
	if (varGrOutlet_sh === 1)
		GraphOutletAdd();
	if (varGrTq_sh === 1)
		GraphTorqueAdd();
}

function UpdateCycleStatus() {
	if (vET_TestStatusUpdateStausFlag === 1) {
		vET_TestStatusUpdateStausFlag = 0;
		SetCanvasHeader('canvasTestCycle', strET_Test_Status, 1, '105% Trebuchet MS');
	}
}

function UpdateCycleTime() {
	var lclString = "";
	CounterGage.refresh(CyclesCounter);
	convertHalfMsecToHHMMSS_String(vCurrrentCycleInterval);
	lclString = "                        Current Cycle Time:" + vstrRetHHMMSS;
	EraseCanvasTextWithPgmableLineOffset('canvasTestCondInterval', 1, 36);
	SetCanvasText_WithPgmbleLineOffset('canvasTestCondInterval', lclString, 1, 36, '115% Trebuchet MS');

	convertHalfMsecToHHMMSS_String(vAverageCycleInterval);
	lclString = "                        Average Cycle Time:" + vstrRetHHMMSS;
	EraseCanvasTextWithPgmableLineOffset('canvasTestCondInterval', 2, 36);
	SetCanvasText_WithPgmbleLineOffset('canvasTestCondInterval', lclString, 2, 36, '115% Trebuchet MS');

	convertHalfMsecToHHMMSS_String(vTestInterval);
	lclString = "                        Total Test Time:" + vstrRetHHMMSS;
	EraseCanvasTextWithPgmableLineOffset('canvasTestCondInterval', 3, 36);
	SetCanvasText_WithPgmbleLineOffset('canvasTestCondInterval', lclString, 3, 36, '115% Trebuchet MS');


}


function UpdateValveStatus() {
	AjaxSerInterfaceSetDesiredStat(vlInletIsolatingDesired, vlIntletVentingDesired, vlOutletExhaustDesired, vlCntrRlyDesired, vlRstRlyDesired);
	if (varTestComponent_sh === 1) {   //Indicates that Component canvas is on.
		vlInletIsolatingStat = vlInletIsolatingDesired;
		vlInletVentingStat = vlIntletVentingDesired;
		vlOutletExhaustStat = vlOutletExhaustDesired;
		UpdateComponentStatus();
	}
	if (varTestCondInterval_sh === 1)
		UpdateCycleTime();
	if (varTestCycle_sh === 1)
		UpdateCycleStatus();
	if (vCycleInProgress === 1) {
		vTestInterval++;	//This variable counts the time for which the test has been executed
		vCurrrentCycleInterval++;//This variable stores the time required for completion of the current cycle
	}
}

function UpdateComponentStatus() {
	if (vlInletIsolatingStat === 1)
		drawCanvasRectangle('canvasInletIsoVlStat', '#C7FF32');
	else
		drawCanvasRectangle('canvasInletIsoVlStat', '#C1CEC7');
	if (vlInletVentingStat === 1)
		drawCanvasRectangle('canvasInletVentingVlStat', '#C7FF32');
	else
		drawCanvasRectangle('canvasInletVentingVlStat', '#C1CEC7');
	if (vlOutletExhaustStat === 1)
		drawCanvasRectangle('canvasOutletExhVlStat', '#C7FF32');
	else
		drawCanvasRectangle('canvasOutletExhVlStat', '#C1CEC7');
}

function ExecuteStartStopAction() {
	var strStringToChange;
	if (boolETTestRunFlag === 0) {
		boolETTestRunFlag = 1;
		vIntervalId = setInterval(ExecuteEnduranceTest, 500);
		strStringToChange = "Pause";
		hideDiv('divResumeWindow');
		hideDiv('divAbortWindow');
		ChangeText('idStartBtn', '350%', '#C1CEC7', strStringToChange);
		AjaxUpdateTestStatus(vTestId, ET_TEST_ID_BEGUN);

	}
	else {
		boolETTestRunFlag = 0;
		clearInterval(vIntervalId);
		strStringToChange = "Start";
		unhideDiv('divResumeWindow');
		unhideDiv('divAbortWindow');
		ChangeText('idStartBtn', '350%', '#C1CEC7', strStringToChange);
		AjaxUpdateTestStatus(vTestId, ET_TEST_ID_PAUSED_BY_USER);
	}
}

function ExecuteEmergencyStopAction() {
	vEmergencyStopFlag = 1;
}

function convertHalfMsecToHHMMSS(vHalfSec) {
	vRetHrs = 0;
	vRetMins = 0;
	vRetSecs = 0;

	if (vHalfSec % 2 !== 0)   //Indicates that the value is odd
		vHalfSec--;	//This will make it even!

	vHalfSec = vHalfSec / 2;	//This will convert it into seconds!    
	if (vHalfSec >= 3600)	//Indicates that Hrs is not zero!
	{
		vRetHrs = parseInt(vHalfSec / 3600);
		vHalfSec = vHalfSec - (vRetHrs * 3600);
	}
	if (vHalfSec >= 60)	//Idicates that minutes is not zero!
	{
		vRetMins = parseInt(vHalfSec / 60);
		vHalfSec = vHalfSec - (vRetMins * 60);
	}
	vRetSecs = parseInt(vHalfSec);    //Whatever is left is seconds!!!
}

function convertHalfMsecToHHMMSS_String(vHalfSec) {
	convertHalfMsecToHHMMSS(vHalfSec);
	vstrRetHHMMSS = "";

	if (vRetHrs === 0) {
		vstrRetHHMMSS = "00";
	}
	else {
		if (vRetHrs < 10) {
			vstrRetHHMMSS = "0" + vRetHrs.toString();
		}
		else
			vstrRetHHMMSS = vRetHrs.toString();
	}
	vstrRetHHMMSS += ":";


	if (vRetMins === 0) {
		vstrRetHHMMSS += "00";
	}
	else {
		if (vRetMins < 10)
			vstrRetHHMMSS += "0" + vRetMins.toString();
		else
			vstrRetHHMMSS += vRetMins.toString();
	}
	vstrRetHHMMSS += ":";
	if (vRetSecs === 0) {
		vstrRetHHMMSS += "00";
	}
	else {
		if (vRetSecs < 10)
			vstrRetHHMMSS += "0" + vRetSecs.toString();
		else
			vstrRetHHMMSS += vRetSecs.toString();
	}
	//alert(vstrRetHHMMSS);
}



function GraphInletAdd() {
	var varToDisplay = 0;
	GrInletDisplayedSampleCnt++;
	if (GrInletconfig.data.datasets.length > 0) {
		GrInletconfig.data.labels.push(ET_SampleCntr.toString());

		if (GrInletDisplayedSampleCnt > 500)
			GrInletconfig.data.labels.splice(0, 1);
		$.each(GrInletconfig.data.datasets, function (i, dataset) {
			if (ET_Inlet_Pressure > 500 || ET_Inlet_Pressure < 0) {
				varToDisplay = GrInletPrevVal;
			}
			else {
				varToDisplay = ET_Inlet_Pressure;
				GrInletPrevVal = ET_Inlet_Pressure;
			}
			dataset.data.push(varToDisplay);
			if (ET_SampleCntr > 500)
				dataset.data.shift();
		});
		GrInlet.update();
		//window.myLine.update();
	}
}

var GrOutletPrevVal = 0;


function GraphOutletAdd() {
	var varToDisplay = 0;
	GrOutletDisplayedSampleCnt++;
	if (GrOutletconfig.data.datasets.length > 0) {
		GrOutletconfig.data.labels.push(ET_SampleCntr.toString());
		if (GrOutletDisplayedSampleCnt > 500)
			GrOutletconfig.data.labels.splice(0, 1);
		$.each(GrOutletconfig.data.datasets, function (i, dataset) {
			if (ET_Outlet_Pressure > 500 || ET_Outlet_Pressure < 0) {
				varToDisplay = GrOutletPrevVal;
			}
			else {
				varToDisplay = ET_Outlet_Pressure;
				GrOutletPrevVal = ET_Outlet_Pressure;
			}
			dataset.data.push(varToDisplay);
			if (ET_SampleCntr > 500)
				dataset.data.shift();
		});
		GrOutlet.update();
	}
}

var GrTqPrevVal = 0;
function GraphTorqueAdd() {
	var varToDisplay = 0;
	GrTqDisplayedSampleCnt++;
	if (GrTqconfig.data.datasets.length > 0) {
		GrTqconfig.data.labels.push(ET_SampleCntr.toString());
		if (GrTqDisplayedSampleCnt > 500)
			GrTqconfig.data.labels.splice(0, 1);
		$.each(GrTqconfig.data.datasets, function (i, dataset) {
			if (vTqPositiveVal > 50 || vTqPositiveVal < -50) {
				varToDisplay = GrTqPrevVal;
			}
			else {
				varToDisplay = vTqPositiveVal;
				GrTqPrevVal = vTqPositiveVal;
			}
			dataset.data.push(varToDisplay);
			if (ET_SampleCntr > 500)
				dataset.data.shift();
		});
		GrTorque.update();
	}
}


function ViewGenRptOkAction() {
	switch (ViewGenRptStatus) {
		case ViewGenRptGetStartDate:
			//Get the input from the Input
			dbQStartDate = document.getElementById('datepicker').value;
			//alert("This is the start Date" + dbQStartDate);
			GenRpt_ShowDateSortEnd();
			ViewGenRptStatus = ViewGenRptGetEndDate;
			break;
		case ViewGenRptGetEndDate:
			dbQEndDate = document.getElementById('datepicker').value;
			//alert("This is the end Date" + dbQEndDate);
			var lclEndDate = new Date(dbQEndDate);
			//alert("This is the end Date" + dbQEndDate);
			extractDateOnly(dbQStartDate);
			vDB_Q_stDate = vDB_TempDate;
			vDB_Q_stMonth = vDB_TempMonth;
			vDB_Q_stYear = vDB_TempYear;

			extractDateOnly(dbQEndDate);
			vDB_Q_EndDate = vDB_TempDate;
			vDB_Q_EndMonth = vDB_TempMonth;
			vDB_Q_EndYear = vDB_TempYear;

			canvasHide('canvasSortMenu');
			//Hide Pushbutton
			hideInput('submitBtn2');
			//Hide TextBox
			hideDiv('DateDiv');
			//show canvasSelectTest 
			AjaxGetCountOfTestBetnDates(vDB_Q_stDate, vDB_Q_stMonth, vDB_Q_stYear, vDB_Q_EndDate, vDB_Q_EndMonth, vDB_Q_EndYear);
			break;
		case ViewGenRptGetTestConductor:
			canvasKbdHide();
			canvasHide('canvasSortMenu');
			hideInput('submitBtn2');
			hideInput('idTestParam');
			vDB_strQuery = document.getElementById('idTestParam').value;
			AjaxGetCountOfTestByConductors(vDB_strQuery);
			break;
		case ViewGenRptGetTestId:
			canvasKbdHide();
			canvasHide('canvasSortMenu');
			hideInput('submitBtn2');
			hideInput('idTestParam');
			vDB_strQuery = document.getElementById('idTestParam').value;
			AjaxGetCountOfTestById(vDB_strQuery);
			break;
		default:
			ViewGenRptStatus = 0;
			break;
	}
}

function showDatePickerStart() {
	dpStart = $("#datepicker");
	dbQStartDate = "";
	dpStart.datepicker({
		dateFormat: "dd-mm-yy"
	});
	dpStart.datepicker();
	dpStart.datepicker('setDate', '+0');
	dpStart.datepicker("option", "maxDate", '0');
	dpStart.datepicker("option", "minDate", '1-11-2017');
	dpStart.datepicker('show');
}


function showDatePickerEnd() {
	dpEnd = $("#datepicker");
	dpEnd.datepicker({
		dateFormat: "dd-mm-yy"
	});
	dpEnd.datepicker();
	dpEnd.datepicker('setDate', '0');
	dpEnd.datepicker("option", "minDate", dbQStartDate);
	dpEnd.datepicker("option", "maxDate", '0');
	dpEnd.datepicker('show');

}

function ViewGenRptEventAdd() {
	document.getElementById("canvasKbd").addEventListener("click", ETparamEntryGetKBdClickCoordinates, false);//Put the brackets to the function name and get screwed for next 6 hours!!!
	document.getElementById("canvasKbd").addEventListener("mousedown", canvasKbdGlowButton, false);
	document.getElementById("canvasKbd").addEventListener("mouseup", canvasKbdDeglowButton, false);
	document.getElementById("canvasKbd").addEventListener("contextmenu", function (e) { e.preventDefault(); }, false);
	//vTableRowElements = document.getElementsByClassName("classTableElement classTableElementHilight");
	//AddEventForTableRows('tblTestList');    
}

function clearTable(tableId) {
	var tbl = document.getElementById(tableId);
	var rows = tbl.getElementsByTagName("tr");
	var lclCntr = rows.length;
	if (lclCntr > 1) {
		//alert("Deletion of rows required!");
		lclCntr--;//Now we have exact number of rows to be deleted!
		//var rowToDel;
		$('.td0').remove();
		$('.td1').remove();
		$('.td2').remove();
		$('.td3').remove();
		$('.td4').remove();
	}
	else {
		//alert("These are no rows to delete");
	}
}

function AddElementToTable(tableId, cellsToInsert, strData) {
	// Find a <table> element with id="myTable":
	//console.log("Fn. AddElementToTable Begin..")
	var cell = new Array(cellsToInsert);
	var table = document.getElementById(tableId);
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);
	row.className = "classTableElement";
	//Add Cells as per the required number
	for (var i = 0; i < cellsToInsert; i++) {
		cell[i] = row.insertCell();
		cell[i].innerHTML = strData[i];

		switch (i) {
			case 0:
				cell[0].className = "td0";
				break;

			case 1:
				cell[1].className = "td1";
				break;

			case 2:
				cell[2].className = "td2";
				break;

			case 3:
				cell[3].className = "td3";
				break;

			case 4:
				cell[4].className = "td4";
				break;

			default:
				//console.log("Ye Kahaan Aa gaye Hum...");
				break;
		}

		//console.log(cell[i].className);
	}
}


function GlowRowOnTable(tableId, rowNumber) {
	//console.log("GlowRowOnTable");
	var tbl = document.getElementById(tableId);
	var rows = tbl.getElementsByTagName("tr");
	if (rows.length > 0) {
		vSelectedRow = tbl.rows[rowNumber + 1];
		var lclClassName = vSelectedRow.className;
		//console.log("Class name of the row: " + lclRow.className + "\n");
		if (lclClassName !== "") {
			//console.log("Class Name Change begin...");
			if (vSelectedRow.className === "classTableElement")
				vSelectedRow.className = "classTableElementHilight";
			else
				vSelectedRow.className = "classTableElement";
		}
		else {
			//console.log("class Name");
		}
	}
	//console.log("Class name of the row: " + lclRow.className + "\n");
}

function AddEventsToTableForEachRow(tableId) {
	//GlowRowOnTable(tableId, 3);

	//Get the NodeList
	//console.log("Function Called!");
	var nodelist = document.querySelectorAll(".classTableElement");
	var lclCntr = 0;
	//console.log("Elements found:" + nodelist.length);
	//Set ID's for all the elements
	var strInloop = "";
	//This loop sets the ID for each row.
	console.log("Setting id for each element");
	for (lclCntr = 0; lclCntr < nodelist.length; lclCntr++) {
		strInloop = "tr" + lclCntr;
		//console.log("str: ", strInloop);
		nodelist[lclCntr].setAttribute("id", strInloop);
	}
	//This loop gets all the elements in an array
	console.log("Adding Elements to the array");
	var rowElement = new Array(nodelist.length + 1);
	for (lclCntr = 0; lclCntr < nodelist.length; lclCntr++) {
		strInloop = "tr" + lclCntr;
		rowElement[lclCntr] = document.getElementById(strInloop);
		//console.log("Element[" + lclCntr + "] = " + rowElement[lclCntr]);
	}
	//This loop adds events for each element
	console.log("Adding Events.");
	for (lclCntr = 0; lclCntr < nodelist.length; lclCntr++) {
		let closureVar = lclCntr;
		rowElement[closureVar].addEventListener("mouseover", function () {
			GlowRowOnTable('tblTestList', closureVar)
		}, false);
		rowElement[closureVar].addEventListener("mouseout", function () {
			GlowRowOnTable('tblTestList', closureVar)
		}, false);
		rowElement[closureVar].addEventListener("click", function () {
			TableRowClickAction(closureVar);
		}, false);
		console.log("Adding Events:" + lclCntr);
	}
	console.log("Job Done.");
}

function TableRowClickAction(rRowNumber) {
	/*
	console.log("Selected Row:" + rRowNumber);
	console.log("Test ID:" + vDB_TestIdStr[rRowNumber]);
	console.log("Test Conductor:" + vDB_TestConductor[rRowNumber]);
	console.log("Test Date:"+ vDB_TestDate[rRowNumber] );
	console.log("Test Result:"+ vDB_Result[rRowNumber] );
	*/
	vRowClicked = rRowNumber;

	EraseCanvasText('canvasSelectTest', 1);
	EraseCanvasText('canvasSelectTest', 2);
	EraseCanvasText('canvasSelectTest', 3);
	EraseCanvasText('canvasSelectTest', 4);
	SetCanvasText('canvasSelectTest', "Id:" + vDB_TestIdStr[rRowNumber], 1, '145% Trebuchet MS');
	SetCanvasText('canvasSelectTest', "Cond.:" + vDB_TestConductor[rRowNumber], 2, '145% Trebuchet MS');
	SetCanvasText('canvasSelectTest', "Date:" + vDB_TestDate[rRowNumber], 3, '145% Trebuchet MS');
	SetCanvasText('canvasSelectTest', "Res:" + vDB_Result[rRowNumber], 4, '145% Trebuchet MS');

	//console.log("ADITYA");
	unhideDiv('divCvsSelected');
	unhideDiv('divBtnGenRpt');
}

function GetTestId_now() {
	var date = new Date();
	AjaxGetTestId(date.getDate(), (date.getMonth() + 1), date.getFullYear(), date.getHours(), date.getMinutes());
	//alert("This is the ID:" +  vTestId);
}

function maxWindow() {
	browser.webkitFullscreenEnabled();
	console.log(document.webkitIsFullScreen);
	console.log(document.webkitFullscreenEnabled);
}


function extractDateOnly(strDate) {
	var lclString = strDate;
	lclPosnCntr = lclString.search('-');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TempDate = parseInt(subString);
	subString = subString + '-';
	lclString = lclString.replace(subString, '');

	lclPosnCntr = lclString.search('-');
	subString = lclString.slice(0, lclPosnCntr);
	vDB_TempMonth = parseInt(subString);

	subString = subString + '-';
	lclString = lclString.replace(subString, '');

	vDB_TempYear = parseInt(lclString);

}

function GetRcdBetnDates() {
	//console.log("CAME HERE..."+ vDB_GetRecordBetweenDatesStatus);
	switch (vDB_GetRecordBetweenDatesStatus) {
		case GET_BETN_DATES_TRIGGER_AJAX:
			vDB_responseReady = 0;
			AjaxGetSpecificRcdOfTestBetnDates(vDB_Q_stDate, vDB_Q_stMonth, vDB_Q_stYear, vDB_Q_EndDate, vDB_Q_EndMonth, vDB_Q_EndYear, vDB_RcdToGet);
			vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_AWAIT_COMPLETION;
			break;
		case GET_BETN_DATES_AWAIT_COMPLETION:
			if (vDB_responseReady === 1) {
				//alert("This is the response:" + vDB_str);
				ExtractTestParamsFromString(vDB_str, vDB_RcdToGet);
				vDB_responseReady = 0;
				vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_TAKE_ACTION;
			}
			break;
		case GET_BETN_DATES_TAKE_ACTION:
			CursorRestoreEntirePage();
			AddElementToTable('tblTestList', 5, vDBTableRow);
			CursorModifyEntirePage('wait');
			vDB_RcdToGet++;
			if (vDB_RcdToGet > vDB_cnt)
				vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_EXIT_ACTION;
			else
				vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_TRIGGER_AJAX;
			//alert("Came here");
			break;
		case GET_BETN_DATES_EXIT_ACTION:
			CursorRestoreEntirePage();
			clearInterval(vDB_GetRcdDatesId);
			unhideDiv('divTbl1');
			AddEventsToTableForEachRow('tblTestList');
			vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_TRIGGER_AJAX;
			break;
		default:
			vDB_GetRecordBetweenDatesStatus = GET_BETN_DATES_TRIGGER_AJAX;
			break;

	}

}


function GetRcdByConductors() {
	switch (VDB_GetRecordByConductorStatus) {
		case GET_BY_CONDUCTOR_TRIGGER_AJAX:
			vDB_responseReady = 0;
			AjaxGetSpecificRcdOfTestByConductors(vDB_strQuery, vDB_RcdToGet);
			VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_AWAIT_COMPLETION;
			break;
		case GET_BY_CONDUCTOR_AWAIT_COMPLETION:
			if (vDB_responseReady === 1) {
				ExtractTestParamsFromString(vDB_str, vDB_RcdToGet);
				//AddElementToTable(tableId, cellsToInsert, strData);
				vDB_responseReady = 0;
				VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_TAKE_ACTION;
			}
			break;
		case GET_BY_CONDUCTOR_TAKE_ACTION:
			CursorRestoreEntirePage();
			AddElementToTable('tblTestList', 5, vDBTableRow);
			CursorModifyEntirePage('wait');
			vDB_RcdToGet++;
			if (vDB_RcdToGet > vDB_cnt)
				VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_EXIT_ACTION;
			else
				VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_TRIGGER_AJAX;
			break;
		case GET_BY_CONDUCTOR_EXIT_ACTION:
			CursorRestoreEntirePage();
			clearInterval(vDB_GetRcdByConductor);
			unhideDiv('divTbl1');
			AddEventsToTableForEachRow('tblTestList');
			VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_TRIGGER_AJAX;
			break;
		default:
			VDB_GetRecordByConductorStatus = GET_BY_CONDUCTOR_TRIGGER_AJAX;
			break;
	}


}

function GetRcdByTestName() {
	switch (VDB_GetRecordByTestId) {
		case GET_BY_TEST_ID_TRIGGER_AJAX:
			//alert("This is the record count:" + vDB_cnt);
			vDB_responseReady = 0;
			AjaxGetSpecificRcdOfId(vDB_strQuery, vDB_RcdToGet);
			VDB_GetRecordByTestId = GET_BY_TEST_ID_AWAIT_COMPLETION;
			break;
		case GET_BY_TEST_ID_AWAIT_COMPLETION:
			if (vDB_responseReady === 1) {
				//alert("This is the response:" + vDB_str);
				ExtractTestParamsFromString(vDB_str, vDB_RcdToGet);
				//AddElementToTable(tableId, cellsToInsert, strData);
				vDB_responseReady = 0;
				VDB_GetRecordByTestId = GET_BY_TEST_ID_TAKE_ACTION;
			}
			break;
		case GET_BY_TEST_ID_TAKE_ACTION:
			CursorRestoreEntirePage();
			AddElementToTable('tblTestList', 5, vDBTableRow);
			CursorModifyEntirePage('wait');
			vDB_RcdToGet++;
			if (vDB_RcdToGet > vDB_cnt)
				VDB_GetRecordByTestId = GET_BY_TEST_ID_EXIT_ACTION;
			else
				VDB_GetRecordByTestId = GET_BY_TEST_ID_TRIGGER_AJAX;
			//alert("Came here");
			break;
		case GET_BY_TEST_ID_EXIT_ACTION:
			CursorRestoreEntirePage();
			clearInterval(vDB_GetRcdByTestId);
			unhideDiv('divTbl1');
			AddEventsToTableForEachRow('tblTestList');
			VDB_GetRecordByTestId = GET_BY_TEST_ID_TRIGGER_AJAX;
			break;
		default:
			VDB_GetRecordByTestId = GET_BY_TEST_ID_TRIGGER_AJAX;
			break;
	}

}

function GetRcdIncompleteTest() {
	switch (vDB_GetIncompleteRcd) {
		case GET_BY_INCOMP_TEST_TRIGGER_AJAX:
			console.log("AA");
			AjaxGetSpecificRcdOfIncompleteTests(vDB_RcdToGet);
			vDB_responseReady = 0;
			vDB_GetIncompleteRcd = GET_BY_INCOMP_TEST_AWAIT_COMPLETION;
			break;

		case GET_BY_INCOMP_TEST_AWAIT_COMPLETION:
			if (vDB_responseReady === 1) {
				console.log("BB");
				ExtractTestParamsFromString(vDB_str, vDB_RcdToGet);
				vDB_responseReady = 0;
				vDB_GetIncompleteRcd = GET_BY_INCOMP_TEST_TAKE_ACTION;
			}
			break;

		case GET_BY_INCOMP_TEST_TAKE_ACTION:
			CursorRestoreEntirePage();
			AddElementToTable('tblTestList', 5, vDBTableRow);
			CursorModifyEntirePage('wait');
			vDB_RcdToGet++;
			console.log("CC Rcd to Get" + vDB_RcdToGet + "DB to count" + vDB_cnt);
			if (vDB_RcdToGet > vDB_cnt) {
				console.log("CD");
				vDB_GetIncompleteRcd = GET_BY_INCOMP_TEST_EXIT_ACTION;
			}
			else {
				console.log("CE");
				vDB_GetIncompleteRcd = GET_BY_INCOMP_TEST_TRIGGER_AJAX;
			}
			break;

		case GET_BY_INCOMP_TEST_EXIT_ACTION:
			console.log("DD");
			CursorRestoreEntirePage();
			console.log("DE");
			clearInterval(vDB_GetRcdIncompTest);
			console.log("DF");
			unhideDiv('divTbl1');
			console.log("DG");
			AddEventsToTableForEachRow('tblTestList');
			console.log("DH");
			VDB_GetRecordByTestId = GET_BY_INCOMP_TEST_TRIGGER_AJAX;
			console.log("DI");
			break;

		default:
			vDB_GetIncompleteRcd = GET_BY_INCOMP_TEST_TRIGGER_AJAX;
			break;
	}
}

function ResumeSelectedTest() {
	//alert("This is the selected Row:" + vRowClicked);
	//alert("This is the selected Test ID:" + vDB_TestIdNum[vRowClicked]);
	//alert("This is the resume Status:" + vDBResumeTestStat);
	switch (vDBResumeTestStat) {
		case INCOMP_TST_GET_TEST_PARAM_FROM_DB:
			if (vFunctionReentryCntr === 0) {
				//alert("a");
				vFunctionReentryCntr++;
				vDB_responseReady = 0;
				AjaxRetrieveTestParamFromDB(vDB_TestIdNum[vRowClicked]);
				VDB_GetIncompTstParam = setInterval(ResumeSelectedTest, 100);
				vDBResumeTestStat = INCOMP_TST_AWAIT_RESPONSE;
			}
			break;
		case INCOMP_TST_AWAIT_RESPONSE:
			//alert("b");
			if (vDB_responseReady === 1) {
				vDB_responseReady = 0;
				vDBResumeTestStat = INCOMP_TST_STORE_PARAM_IN_FILE_BEGIN;
			}
			break;
		case INCOMP_TST_STORE_PARAM_IN_FILE_BEGIN:
			//alert("c");
			vDB_responseReady = 0;	
			AjaxStoreTestToResumeData(ETSet_Pressure,ETSet_OpeningRotation,ETSet_ClosingTorque,ETSet_EndTorque,ETSet_Cycles,vDB_TestIdNum[vRowClicked],ET_ResumeTestCompletedCycles);
			/*alert("ETSet_Pressure:" + ETSet_Pressure);
			alert("ETSet_OpeningRotation:" + ETSet_OpeningRotation);
			alert("ETSet_ClosingTorque:" + ETSet_ClosingTorque);
			alert("ETSet_EndTorque:" + ETSet_EndTorque);
			alert("ETSet_Cycles:" + ETSet_Cycles);
			alert("ET_ResumeTestCompletedCycles:" + ET_ResumeTestCompletedCycles);*/
			
			vDBResumeTestStat = INCOMP_TST_STORE_PARAM_IN_FILE_AWAIT;
			break;
		case INCOMP_TST_STORE_PARAM_IN_FILE_AWAIT:
		if (vDB_responseReady === 1) {
			//alert("d");
			vDB_responseReady = 0;
			//alert("ET Test ID NUM:" + vDB_TestIdNum[vRowClicked]);
			vDBResumeTestStat = INCOMP_TST_LOAD_PAGE;
		}
			break;
		case INCOMP_TST_LOAD_PAGE:
			vFunctionReentryCntr = 0;
			LoadPage('ConductTest2.html');
			clearInterval(VDB_GetIncompTstParam);
			break;
		default:
			break;
	}
}

function RetrieveTestParamOfTestToResume(){
	console.log("stat:" + vDBRestartTestStat);
	console.log("reentry cntr:" + vFunctionReentryCntr);
	
	switch (vDBRestartTestStat) {
		case RESTART_TEST_GET_PARAM:
			if (vFunctionReentryCntr === 0) {
				vDB_responseReady = 0;
				vDBRestartTestStat = RESTART_TEST_FILL_PARAM;
				AjaxRetrieveTestToResumeData();
				console.log("Cmd Sent");
				vFunctionReentryCntr = 1;
				VDB_GetIncompTstParam = setInterval(RetrieveTestParamOfTestToResume, 100);
			}
			break;
		case RESTART_TEST_FILL_PARAM:
			if (vDB_responseReady === 1) {
				console.log("Response Recieved");
				vDB_responseReady = 0;
				vDBRestartTestStat = RESTART_TEST_EXIT_ACTION;
				console.log("ETSet_Pressure:" + ETSet_Pressure);
				console.log("ETSet_OpeningRotation:" + ETSet_OpeningRotation);
				console.log("ETSet_ClosingTorque:" + ETSet_ClosingTorque);
				console.log("ETSet_EndTorque:" + ETSet_EndTorque);
				console.log("ETSet_Cycles:" + ETSet_Cycles);
				console.log("ET_ResumeTestCompletedCycles:" + ET_ResumeTestCompletedCycles);
			}
			break;
		case RESTART_TEST_EXIT_ACTION:
			clearInterval(VDB_GetIncompTstParam);
			vFunctionReentryCntr = 0;
			OutletPrGauge = CanvasDrawGauge('OlPrGauge',0,400,8,2,true,'','');		    
			InletPrGauge = CanvasDrawGauge('InletPrGauge',0,400,4,2,true,'Inlet Pressure','');
			TqGauge = CanvasDrawGauge('TqGauge',-35,0,7,2,true,'Peak Torque','N-m')
			  $.each(GrInletconfig.data.datasets, function(i, dataset) {
			   var background = '#C7FF32';
			   dataset.borderColor = background;
			   dataset.backgroundColor = background;
			   dataset.pointBorderColor = background;
			   dataset.pointBackgroundColor = background;
			   dataset.pointBorderWidth = 1;
		   });
			 $.each(GrOutletconfig.data.datasets, function(i, dataset) {
			   var background = '#C7FF32';
			   dataset.borderColor = background;
			   dataset.backgroundColor = background;
			   dataset.pointBorderColor = background;
			   dataset.pointBackgroundColor = background;
			   dataset.pointBorderWidth = 1;
		   });
   
		   $.each(GrTqconfig.data.datasets, function(i, dataset) {
			   var background = '#C7FF32';
			   dataset.borderColor = background;
			   dataset.backgroundColor = background;
			   dataset.pointBorderColor = background;
			   dataset.pointBackgroundColor = background;
			   dataset.pointBorderWidth = 1;
		   });	
		   ETConduct_ShowHideCanvas('canvasGrInlet');
		   ETConduct_ShowHideCanvas('canvasGrOutlet');
		   ETConduct_ShowHideCanvas('canvasGrTq');
		   hideDiv('divResumeWindow');
		   hideDiv('divAbortWindow');
		   ETConduct_ShowHideCanvas('canvasGrInlet');
		   ETConduct_ShowHideCanvas('canvasGrOutlet');
		   ETConduct_ShowHideCanvas('canvasGrTq');
		   //alert('Test id:' + vTestId);    
		   vDBRestartTestStat = RESTART_TEST_GET_PARAM;
			break;
		default:
			vDBRestartTestStat = RESTART_TEST_GET_PARAM;
		break;
	}
}


function ReentrantStoreTestParameters() {
	console.log("Status:" + vDBStoreTestParamStat);
	switch (vDBStoreTestParamStat) {
		case STORE_TEST_PARAM_BEGIN:
		if (vFunctionReentryCntr === 0) {
			vDB_responseReady = 0;
			vDBStoreTestParamStat = STORE_TEST_PARAM_AWAIT;
			AjaxStoreTestParameters(ETSet_Pressure, ETSet_OpeningRotation, ETSet_ClosingTorque, ETSet_EndTorque, ETSet_Cycles, ETSet_TestId, ETSet_TestId.length, ETSet_TestConductor, ETSet_TestConductor.length);
			console.log("Cmd Sent");
			vFunctionReentryCntr = 1;
			VDB_StoreRcdProcess = setInterval(ReentrantStoreTestParameters, 100);
		}
			break;
		case STORE_TEST_PARAM_AWAIT:
		if(vDB_responseReady === 1){
			vDB_responseReady = 0;
			vDBStoreTestParamStat = STORE_TEST_PARAM_EXIT_ACTION;
		}
			break;
		case STORE_TEST_PARAM_EXIT_ACTION:
			clearInterval(VDB_StoreRcdProcess);
			vFunctionReentryCntr = 0;
			//alert("Stored Params!");
			LoadPage('testConduct.html');
			vDBStoreTestParamStat = STORE_TEST_PARAM_BEGIN;
			break;
		default:
			vDBStoreTestParamStat = STORE_TEST_PARAM_BEGIN;
			break;
	}
}

var vResumeTestStat = RESUME_LATER_BEGIN;
var vAbortTestStat =  ABORT_TEST_BEGIN;


			
function AbortTest(){
	switch(vAbortTestStat){
		case ABORT_TEST_BEGIN:	 				
		break;
		case ABORT_TEST_EMERGENCY_STOP_MONITOR:
		break;
		case ABORT_TEST_UPDATE_STATUS:			
		break;
		case ABORT_TEST_AWIT_STATUS_UPDATE_COMP:
		break;
		case ABORT_TEST_EXIT_ACTION: 
		AjaxKillApp();
		break;
		default:
		break;

	}
	
	
	console.log("Abort Test");
}

function ResumeLater(){
	switch(vResumeTestStat){
		case RESUME_LATER_BEGIN: 				
		break;
		case RESUME_LATER_EMERGENCY_STOP_MONITOR:
		break;
		case RESUME_LATER_UPDATE_STATUS:		
		break;
		case RESUME_LATER_AWIT_STATUS_UPDATE_COMP:
		break;
		case RESUME_LATER_EXIT_ACTION: 			
		AjaxKillApp();
		break;
		default:
		break;
		
	}
	EnduranceTestExecuteCurrrentStat = ;
	
	console.log("Resume Later");
}
