import { parsePageId } from 'notion-utils'

const pageId = parsePageId('https://www.notion.so/Blog-ab370d5aef5744a18db5d1bf0ef56f52')
const wikiId = parsePageId('https://www.notion.so/Wiki-d7523f7b60d04ad59427abea7168790c')
const projectIds = [
    parsePageId(
        'https://www.notion.so/Develop-a-Regional-Earth-Model-in-Eastern-Asia-and-Western-Pacific-using-Full-Seismic-Waveform-Inver-1f3507f592764fc7b4a6272c921a66ed'
    ),
    parsePageId(
        'https://www.notion.so/Develop-a-Python-Version-of-FK-to-Calculate-the-Green-s-Function-and-Synthetic-Waveforms-for-the-1D--c725c5b93f9a4745a6edb063b90bbad0'
    ),
    parsePageId(
        'https://www.notion.so/Using-Neural-Network-to-Do-the-Seismic-Inversion-0274f95cf8604a48837487150a678ca3'
    ),
    parsePageId(
        'https://www.notion.so/Invert-for-the-660-km-Discontinuity-Layer-Based-on-Triplicated-S-Wave-Using-Full-Waveform-Inversion-faac83e594674aca8e7f85a56b7e35f6'
    ),
].map((pageId) => `/${pageId}`)

export default {
    pageId: pageId,
    spaceId: '05f80ef1-fcad-4982-9333-06f8429a89d1',
    projectIds: projectIds,
    wikiId: wikiId,
}
