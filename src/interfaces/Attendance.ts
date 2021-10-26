export interface Attendance {
  committee: {
    attendance: number;
    justified: number;
    miss: number;
  };
  plenary: {
    attendance: number;
    miss: number;
    deliberativedSessions: number;
    dSAttendance: number;
    dSJustified: number;
    dSMiss: number;
  };
  range: number;
}
