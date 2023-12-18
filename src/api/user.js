import { ENV } from "@/utils";

export class User{
    async getMe(){
        try {
            
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

            const params = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAyODc5MDYwLCJleHAiOjE3MDU0NzEwNjB9.j99D8eLNRs3aZDnAL-lHQ_Q4YhErE1WPo0J5RVk8BZc"
                }
            }

            const response = await fetch(url,params);
            const result = await response.json();
            
            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}