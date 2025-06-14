import { TITLESPAGE } from "@/helpers/data";

export default function useTitle(id) {
    const info = TITLESPAGE.find(item => item.id === id);
    return info
}
