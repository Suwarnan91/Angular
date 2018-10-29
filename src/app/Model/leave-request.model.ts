export class LeaveRequest {
    userId: number;
	leaveTypeId: number;
	startDate: Date;
	endDate: Date;
	reason: String;
    leaveDays: number;
    
    statusId:number;
	leaveRequestId:number;
	processedBy:number;
    rejectreason:String;
   

	
  
    
    public getleaveDays() {
		var starting = new Date(this.startDate);
		var end = new Date(this.endDate);
		var leaveDays = end.getTime() - starting.getTime();
		var days = leaveDays / (1000 * 60 * 60 * 24) + 1;
		console.log(days);
		this.leaveDays = days;
	
		
		return days;
	}


}
