export interface Guest {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Roommate {
  name: string;
  email: string;
  phone: string;
}

export interface Location {
  name: string;
  address: string;
  mapUrl: string;
  embedUrl: string;
}

export interface ScheduleEvent {
  time: string;
  description: string;
  location?: Location;
}

export interface ScheduleDay {
  day: string;
  events: Event[];
}

export interface Hotel {
  name: string;
  address: string;
  mapUrl: string;
  roommates: Roommate[];
  floorPlanUrl: string;
}

export interface GuestInfo {
  guest1: Guest;
  guest2: Guest;
  hotel: Hotel;
}

export type NightSelection = {
  [key in 'friday' | 'saturday' | 'sunday' | 'monday']: boolean;
};

export type RsvpChoice = 'accept' | 'budget' | 'decline' | '';