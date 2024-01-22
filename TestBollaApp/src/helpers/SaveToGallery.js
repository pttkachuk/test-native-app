import * as MediaLibrary from "expo-media-library";

export const saveToGallery = async (uri) => {
    try {
        await MediaLibrary.saveToLibraryAsync(uri);
        console.log("Immagine salvata nella galleria con sucesso");
    } catch (error) {
        console.log("Errore nel salvataggio nella galleria", error);
    }
};