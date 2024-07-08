import Utils from '../../utils';

const BASE_URL = 'https://notes-api.dicoding.dev/v2';

class NotesApi {
  static async getAllnotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();
      const notes = responseJson.data;

      if (notes.length > 0) {
        return notes;
      } else {
        return [];
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async addNotes(title, body) {
    const data = {
      title,
      body,
    };
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      if (!response.ok) {
        Utils.showErrorMessage(
          'Gagal menambahkan catatan : ' + responseJson.message
        );
      }
      return responseJson;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async deleteNotes(id) {
    console.log('MASUK');
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`, options);
      const responseJson = await response.json();
      if (!response.ok) {
        Utils.showErrorMessage(
          'Gagal menghapus catatan : ' + responseJson.message
        );
      }
      return responseJson;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default NotesApi;
