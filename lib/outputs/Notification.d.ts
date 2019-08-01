import { Output } from "../core/types/Outputs";
export declare type NotificationId = string;
export interface NotificationAuthor {
    id: string;
    firstName?: string;
    lastName?: string;
}
export interface NotificationData {
    content: string;
    author?: NotificationAuthor;
    isRead: boolean;
    user: string;
}
export declare type Notification = Output<NotificationId> & NotificationData;
//# sourceMappingURL=Notification.d.ts.map