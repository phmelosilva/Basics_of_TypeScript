import { randomUUID } from "crypto"

export class DatabaseMemory {
    #videos = new Map()

    list(search) {
        // return this.#videos.values() -> values retorna IterableIterator
        
        // Vamos encapsular num Array.from que converte para um Array algo que não era array
        // return Array.from(this.#videos.values()) 

        // Ao invés de usar o values, vamos usar entries, pois traz o ID junto, mas separado das informações do vídeo
        // map - percorrer array e fazer um tipo de modificação
        return Array.from(this.#videos.entries())
            .map((videoArray) => {
                const id = videoArray[0]
                const data = videoArray[1]

                return {
                    id,
                    ...data, // Retorna title, description e duration
                }
            })
            .filter(video => {
                if (search) {
                    return video.title.includes(search)
                }
            })
    }

    create(video) {
        // Universal Unique Id
        const videoId = randomUUID();

        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}