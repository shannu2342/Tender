import { useEffect, useMemo, useState } from 'react';
import api from '../services/api';
import { site } from '../config/site';

let settingsCache = null;
let settingsPromise = null;

const loadSettings = async () => {
    if (settingsCache) return settingsCache;
    if (settingsPromise) return settingsPromise;

    settingsPromise = api
        .get('/settings')
        .then((res) => {
            settingsCache = res.data || {};
            return settingsCache;
        })
        .catch(() => {
            settingsCache = {};
            return settingsCache;
        })
        .finally(() => {
            settingsPromise = null;
        });

    return settingsPromise;
};

const normalizePhone = (value) => String(value || '').replace(/[^\d+]/g, '');
const normalizeWhatsApp = (value) => String(value || '').replace(/[^\d]/g, '');

export const useSiteSettings = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        let mounted = true;
        loadSettings().then((data) => {
            if (mounted) setSettings(data);
        });
        return () => {
            mounted = false;
        };
    }, []);

    return useMemo(() => {
        const phoneRaw = settings?.phoneNumber || site.contact.phoneDisplay;
        const whatsappRaw = settings?.whatsappNumber || site.contact.whatsappNumber;

        return {
            ...site,
            contact: {
                ...site.contact,
                phoneDisplay: phoneRaw,
                phoneTel: normalizePhone(phoneRaw) || site.contact.phoneTel,
                email: settings?.email || site.contact.email,
                whatsappNumber: normalizeWhatsApp(whatsappRaw) || site.contact.whatsappNumber
            },
            tenderAccessEnabled: settings?.tenderAccessEnabled ?? true
        };
    }, [settings]);
};
