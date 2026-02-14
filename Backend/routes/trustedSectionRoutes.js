import express from 'express'
import { getTrustedSection, upsertTrustedSection, upload } from '../controller/trustedSectionController.js'

const router = express.Router()

router.get('/', getTrustedSection)
router.post('/', upload.array('avatars', 10), upsertTrustedSection)

export default router
