#manifest.json
---

##[Manifest - формат файла](http://developer.chrome.com/apps/manifest.html)

файл `manifest.json` - содержит наиболее важную(общую) информацию о приложении

обязательными полями является только **`name`** и **`version`**
    {
      // Required
      "app": {
        "background": {
          // Optional
          "scripts": ["background.js"]
        }
      },
      "manifest_version": 2,
      "name": "My App",
      "version": "versionString",

      // Recommended
      "default_locale": "en",
      "description": "A plain text description",
      "icons": {...},

      // Optional
      "author": ...,
      "commands": {
        "global": ...
      },
      "current_locale": ...,
      "display_in_launcher": ...,
      "display_in_new_tab_page": ...,
      "externally_connectable": {
        "matches": ["*://*.example.com/*"]
      },
      "file_handlers": {...},
      "import": ...,
      "key": "publicKey",
      "kiosk_enabled": true,
      "kiosk_only": true,
      "media_galleries_handlers": ...,
      "minimum_chrome_version": "versionString",
      "nacl_modules": [...],
      "oauth2": ...,
      "offline_enabled": true,
      "optional_permissions": ...,
      "permissions": [...],
      "platforms": ...,
      "requirements": {...},
      "sandbox": [...],
      "short_name": "Short Name",
      "signature": ...,
      "sockets": ...,
      "storage": {
        "managed_schema": ...
      },
      "system_indicator": ...,
      "update_url": "http://path/to/updateInfo.xml",
      "url_handlers": {...},
      "webview": ...
    }