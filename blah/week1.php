<?php

//Display text and such on the page
// echo "hello world!";

//comment
#comment

/**
	*Block Comment
	*DocBlock
*/

/*
	Another way to block comment
	Use for multiline comments
*/

// phpinfo();
//This will display a TON of info about your system config and PHP
//Also PHP Debug information

//Variables
// $myVariable = 0;
// echo $myVariable;


//Concatenation
// $myVariable1 = "My name is ";
// $myVariable2 = "Amanda";
// $myVariablesCombined = $myVariable1 . $myVariable2;
// echo $myVariablesCombined


// Variables inside Variables

// $foo = "Dan";
// $bar = "Hello $foo!";
// echo $bar;



// function add($a, $b) {
// 	echo $a + $b;
// }

// add(2, 8);

// define("APPNAME", "This is my app");
// $global_variable = 10;
// function add($a, $b) {
// 	global $global_variable;
// 	echo $a + $b + $global_variable;
// 	echo APPNAME;
// }
// add (2, 8);



// $myArrayVariable = array(
// 	"key"	=>	"value",
// 	"dan"	=>	"theman",
// 	"int"	=>	0,
// 	"arrayInsideArray"	=>	array(
// 		"october"	=>	"halloween",
// 		"november"	=>	"thanksgiving",
// 		"december"	=>	"christmas",
// 	)
// );
// echo "<pre>";
// var_dump($myArrayVariable);
// echo $myArrayVariable["arrayInsideArray"]["october"];
// echo count($myArrayVariable);


//LOGIC

// $variableA = TRUE;
// $variableB = FALSE;

// if($variableA){
// 	echo "This is a true condition, it passed so you can see this.";
// }
// if(!$variableB){
// 	echo "This is a false condition, but I'll let you see it anyway.";
// }

// //Ternary
// $variable = 10;
// $variableGreaterThanTwo = ($variable > 2 ? TRUE : FALSE);

// //This is the shorthand way of typing the following:
// if($variable >2) {
// 	$variableGreaterThanTwo = TRUE;
// } else {
// 	$variableGreaterThanTwo = FALSE;
// }


// $i = 0;

// if($i === 0) {
// 	echo "i equals 0";
// } elseif($i === 1){
// 	echo "i equals 1";
// } elseif($i ===2){
// 	echo "i equals 2";
// } else {
// 	echo "i does not equal 0, 1, or 2";
// }

// switch($i){
// 	case 0:
// 	echo "i equals 0";
// 	break;

// 	case 1:
// 	echo "i equals 1";
// 	break;

// 	case 2:
// 	echo "i equals 2";
// 	break;

// 	default:
// 	echo "i does not equal 0, 1, or 2";
// 	break;
// }

// $variableStr = "lakjdfkjlhalhdkjlhfalkhj";
// echo strlen($variableStr);

// $varNames = "dan,sally,pamela,bob";
// $names = explode(",", $varNames);

// echo "<pre>";
// var_dump($names);

// echo $names[0];



$lowercaseVar = strtoupper("daniel");
$uppercaseVar = "DAN";
echo $lowercaseVar;
echo strtolower($uppercaseVar);



?>