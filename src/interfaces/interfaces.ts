export interface Speaker {
    id: string;
    name: string;
}

export interface SessionSpeaker extends Speaker {
    firstName: string;
    lastName: string;
    fullName: string;
    tagLine: string;
    profilePicture: string;
    isTopSpeaker: boolean;
}

export interface Session {
    questionAnswers?: any[];
    id: string;
    title: string;
    description: string;
    startsAt?: any;
    endsAt?: any;
    isServiceSession: boolean;
    isPlenumSession: boolean;
    speakers: Speaker[];
    categories: any[];
    roomId?: any;
    room?: any;
    liveUrl?: any;
    recordingUrl?: any;
}





