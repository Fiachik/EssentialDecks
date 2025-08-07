function show_library(channel, control, value, status, group) {
    if (value === 127) {  
        var current = engine.getValue("[Skin]", "show_library");
        engine.setValue("[Skin]", "show_library", current > 0 ? 0 : 1);
    }
}