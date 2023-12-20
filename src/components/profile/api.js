import axios from 'axios';
const url = process.env.REACT_APP_BASE_URL
const updateUser = (userId, data) => {
    return axios.request({
        method: 'put',
        url: `${url}users/update/${userId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
            'Content-Type': 'multipart/form-data',
        },
        data: data, // The data you want to send in the request body
    });
};

export const userUpdated = async (userId, data, setProfileUpdate, alertContent, setAlertContent, setAlertOpen, setLoading,dispatch,updateUserProfile) => {
    try {
        setLoading(true)
        const response = await updateUser(userId, data)
        if (response.status == 200 && response.data.status == true) {
            localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            setProfileUpdate(response.data.user)
            setAlertContent({ ...alertContent, type: "success", message: 'Profile updated!' })
            setAlertOpen(true)
            dispatch(updateUserProfile(response.data.user))
            setLoading(false)
        }
    }
    catch (error) {
        console.error("API Error:", error);
        setAlertContent({ ...alertContent, type: "error", message: error.message })
        setAlertOpen(true)
        setLoading(false)
    }
}


const updatePassword = (userId, data) => {
    return axios.request({
        method: 'put',
        url: `${url}users/change_password/${userId}`, // Replace with your PUT endpoint
        headers: {
            Authorization: ` ${localStorage.getItem('authorization')}`, // Use the appropriate header format
        },
        data: data, // The data you want to send in the request body
    });
};


export const changeUserPassword = async (userId, password, alertContent, setAlertContent, setAlertOpen,setLoading) => {
    try {
        setLoading(true)
        var data = {
            previousPassword: password.currentPassword,
            newPassword: password.newPassword
        }
        const response = await updatePassword(userId, data)
        if (response.status == 200 && response.data.status == true) {
            setAlertContent({ ...alertContent, type: "success", message: 'password changed!' })
            setAlertOpen(true)
            setLoading(false)
        }
    }
    catch (error) {
        console.log("API Error:", error);
        if (error.response.status == 400) {
            setAlertContent({ ...alertContent, type: "error", message: error.response.data.message })
            setAlertOpen(true)
            setLoading(false)
        }
        else {
            setAlertContent({ ...alertContent, type: "error", message: error.message })
            setAlertOpen(true)
            setLoading(false)
        }
    }
}