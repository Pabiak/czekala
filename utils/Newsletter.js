'use server';

export const saveUser = async (email) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_GET_RESPONSE_API_URL}/contacts`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': `api-key ${process.env.GET_RESPONSE_API_KEY}`,
                },
                body: JSON.stringify({
                    email: email,
                    campaign: {
                        campaignId: process.env.NEXT_PUBLIC_GET_RESPONSE_CAMPAIGN_ID,
                    },
                }),
            }
        );

        const text = await response.text();
        let result;

        try {
            result = JSON.parse(text);
        } catch (error) {
            if (text) {
                console.error('Failed to parse JSON:', text);
                return { success: false, message: text || 'Something went wrong' };
            } else {
                result = {};
            }
        }

        if (!response.ok) {
            console.error(result.message || 'Something went wrong');
            return { success: false, message: result.message || 'Something went wrong' };
        }

        console.log('User saved successfully');
        console.log(result);
        return { success: true, data: result };
    } catch (error) {
        console.error('Request failed', error);
        return { success: false, message: error.message || 'Something went wrong' };
    }
};
