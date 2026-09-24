import fs from 'fs'
import path from 'path'
import { OfficialPartnerData, INITIAL_OFFICIAL_PARTNERS } from './partner-store'

const STORE_PATHS = [
  path.join(process.cwd(), 'partner-store.json'),
  path.join(process.cwd(), '..', 'partner-store.json'),
  path.join(process.cwd(), '..', 'careerlead-admin', 'partner-store.json'),
]

export function loadPersistedStore(): Map<string, OfficialPartnerData> {
  const map = new Map<string, OfficialPartnerData>(Object.entries(INITIAL_OFFICIAL_PARTNERS))

  for (const storePath of STORE_PATHS) {
    try {
      if (fs.existsSync(storePath)) {
        const raw = fs.readFileSync(storePath, 'utf8')
        const parsed = JSON.parse(raw)
        if (parsed && typeof parsed === 'object') {
          for (const item of Object.values(parsed) as OfficialPartnerData[]) {
            if (item && item.id && item.company_name) {
              const existing = map.get(item.id)
              map.set(item.id, {
                ...existing,
                ...item,
                logo_url: item.logo_url !== undefined ? item.logo_url : (existing?.logo_url || ''),
              })
            }
          }
        }
      }
    } catch (err) {
      console.warn('[Marketing Partner Store Server] Error reading file:', storePath, err)
    }
  }

  return map
}
