export const Permissions = {
  Dashboard: 1,
  LeaveRequests: 2,
  DaysoffRequests: 3,
  HardwareRequests: 12,
  Reports: 4,
  Meetings: 5,
  Team: 6,
  HolidayCalendar: 7,
  BookRoom: 8,
  ManageEmployees: 9,
  ManageHolidays: 10,
  ManageOrganization: 11,
};

export const PermissionsNames = {
  1: "Dashboard",
  2: "LeaveRequests",
  3: "DaysoffRequests",
  12: "HardwareRequests",
  4: "Reports",
  5: "Meetings",
  6: "Team",
  7: "HolidayCalendar",
  8: "BookRoom",
  9: "ManageEmployees",
  10: "ManageHolidays",
  11: "ManageOrganization",
};

export const RequestStatuses = {
  Decline: 1,
  Approve: 2,
};

export const HardwareRequestTypes = [
  { id: 1, text: "Personal use" },
  { id: 2, text: "Project" },
  { id: 3, text: "Upgrade" },
];
