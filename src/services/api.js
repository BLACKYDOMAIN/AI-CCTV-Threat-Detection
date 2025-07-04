const BASE_URL = 'http://localhost:8000'; // Replace with your Azure backend URL when deployed

/**
 * Fetches all alerts from the backend API.
 * @returns {Promise<Array>} An array of alert objects or an empty array on error.
 */
const getAlerts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/alerts`);
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching alerts:', error);
    return [];
  }
};

/**
 * Submits a complaint to the backend API.
 * @param {Object} formData - The complaint data (name, email, message).
 * @returns {Promise<Object|null>} The server response or null on error.
 */
const submitComplaint = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/complaint`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting complaint:', error);
    return null;
  }
};

const uploadVideoForDetection = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${BASE_URL}/api/detect/detect`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error uploading video:", error);
    return null;
  }
};

// ✅ Export both methods as named exports (optional) and a default object
export { getAlerts, submitComplaint, uploadVideoForDetection };
export default {
  getAlerts,
  submitComplaint,
  uploadVideoForDetection
};
