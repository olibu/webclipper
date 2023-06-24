function generateWebClip(clip) {
    const str = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>FullScreen</key>
			<true/>
			<key>Icon</key>
			<data>
			${clip.image}
			</data>
			<key>IgnoreManifestScope</key>
			<${clip.ignoreManifestScope}/>
			<key>IsRemovable</key>
			<true/>
			<key>Label</key>
			<string>${clip.label}</string>
			<key>PayloadDescription</key>
			<string>Configures settings for a web clip</string>
			<key>PayloadDisplayName</key>
			<string>Web Clip</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.webClip.managed.${clip.payloadId}</string>
			<key>PayloadType</key>
			<string>com.apple.webClip.managed</string>
			<key>PayloadUUID</key>
			<string>${clip.payloadUUID}</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>Precomposed</key>
			<${clip.precomposed}/>
			<key>URL</key>
			<string>${clip.url}</string>
		</dict>
	</array>
	<key>PayloadDisplayName</key>
	<string>${clip.label} WebClip</string>
	<key>PayloadIdentifier</key>
	<string>wcg.${clip.payloadId}</string>
	<key>PayloadRemovalDisallowed</key>
	<false/>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>${clip.payloadUUID}</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
`
    return new Blob([str], {
        type: "application/x-apple-aspen-config",
    })
}

export { generateWebClip };