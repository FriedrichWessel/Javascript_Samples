function DragableComponent(element){

	// check requrements
	if(!element.Position){
		throw("Component need an Position Property to be Dragable");
	}
	if(!element.SetPosition){
		throw("Component need an SetPosition function to be Dragable");
	}


	var oldMouseDown = function(){return element.MouseDown};
	var oldMouseUp = function(){return element.MouseUp};
	var oldMouseMove = function(){return element.MouseMove};
	var oldMouseMoveFinished = function(){return element.MouseMoveFinished};;



	element.MouseDown = function(){
		if(oldMouseDown)
			oldMouseDown.call(element);


		ControlState.dragStart = Screen.MousePosition();
		ControlState.dragStartPlocPosition = Screen.TranslateToScreen(element.Position());
		ControlState.dragStartMousePosition = Screen.MousePosition();
		ControlState.SetActiveElement(element);
		//var plocWorldPosition = position;//this.Node().Position();
		ControlState.dragStartPlocWorldPosition = element.Position();
		var elementPlane = new Plane(plocWorldPosition, [0,0,-1]);
		var mouseOnElement = Screen.TranslateToWorld(Screen.MousePosition(), elementPlane);

		ControlState.draggingPlocOffset = Vector.Subtract(mouseOnElement, element.Position());
		var offsetXToTimeline = element.Position()[0] + ControlState.draggingPlocOffset[0];
		ControlState.draggingPlane = Timeline.GetParallelTimelinePlaneFromXOffset(offsetXToTimeline);

	};

	element.MouseUp = function(){
		ControlState.SetActiveElement(null);
		if(oldMouseUp)
			oldMouseUp.call(element);

	};

	element.MouseMove = function(){

		if(ControlState.draggingPlocOffset!=null) {
			var draggingPlaneHit = Screen.TranslateToWorld(Screen.MousePosition(), ControlState.draggingPlane);
			var newPos = Vector.Subtract(draggingPlaneHit, ControlState.draggingPlocOffset);
			this.SetPosition(newPos);
		}

		if(oldMouseMove)
			oldMouseMove.call(element);

	};

	element.MouseMoveFinished = function(){
		if(ControlState.draggingPlocOffset!=null && !movmentReseted) {
			var draggingPlaneHit = Screen.TranslateToWorld(Screen.MousePosition(), ControlState.draggingPlane);
			var newPlocWorldPos = Vector.Subtract(draggingPlaneHit, ControlState.draggingPlocOffset);
			newPlocWorldPos = Timeline.SnapWorldPositionToDivision(newPlocWorldPos);
			this.SetPosition(newPlocWorldPos,2);

		}
		if(oldMouseMoveFinished)
			oldMouseMoveFinished.call(element);
	};
}