//Trashcans and PorchLights MUST be connected by a script on the trashcan that
//refers to the specific PorchLights

//Open and Closed and Inbetween sprites of cans MUST be connected to each other
//with similar names with different numbers, so that you can use one to trigger
//another. The trigger for the change should run on the closed can, with all 
//other can set to SetActive(false). Then the open can should include a trigger
//collider and the script to trigger the TrashInteraction script.