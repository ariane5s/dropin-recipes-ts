import { API } from "../../Context/API"

export class NotificationsAPI {

  static getNotifications(user: UserId) {
    return API.request<Notification[]>(FetchMethod.GET, `users/${user}/notifs`)
  }

  static setNotificationAsRead(user: UserId, notification: NotificationId, isRead: boolean) {
    return API.request<Notification[]>(FetchMethod.POST, `users/${user}/notifs/${notification}`, {}, {
      is_read: isRead
    })
  }

}
