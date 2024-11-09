import api from "../config/api";
import IActivity from "../interfaces/IActivity";

const getActivitys = () => {
    return api.get<Array<IActivity>>('/Activity')
}

const getActivitybyId = (id : number) => {
    return api.get<IActivity>(`/Activity/${id}`)
}

const createActivity = (data : IActivity) => {
    return api.post(`/Activity`, data)
}

const updateActivity = (data : IActivity, id : number) => {
    return api.put<IActivity>(`/Activity/${id}`, data)
}

const deleteActivity = (id : number) => {
    return api.delete<IActivity>(`/Activity/${id}`)
}

const ActivityService = {
    getActivitys, getActivitybyId, createActivity, updateActivity, deleteActivity
}

export default ActivityService