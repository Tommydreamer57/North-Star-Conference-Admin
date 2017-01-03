UPDATE confsessions
SET sessiontype = $1,
title = $2,
speaker = $3,
demographic = $4,
description = $5,
room = $6
sessionTime = $7
WHERE id = $8
