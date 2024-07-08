const BASE_URL = "https://notes-api.dicoding.dev/v2";

class NotesApi {
  static async getAllnotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const responseJson = await response.json();
      const notes = responseJson.data;
      console.log(notes.length);

      if (notes.length > 0) {
        console.log(notes);
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      if (responseJson.message === "Catatan berhasil ditambahkan") {
        return responseJson;
      } else {
        throw new Error("Gagal menambahkan catatan");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default NotesApi;
