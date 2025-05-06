function onSubmit() {
    // If we're inside a confirmation cycle, allow submission
    if (this._confirmed) {
        this._confirmed = false; // Reset for next time
        return true;
    }

    if (typeof spModal !== 'undefined') {
        // Show modal and handle response
        spModal.confirm("Can you confirm or deny this?").then(function(confirmed) {
            if (confirmed) {
                // Set flag and manually submit
                this._confirmed = true;
                g_form.submit();
            }
            // If cancelled, do nothing (form won't submit)
        }.bind(this)); // `.bind(this)` keeps the context

        return false; // Block initial submission
    }

    // Fallback if spModal isn't available
    return confirm("Can you confirm or deny this?");
}