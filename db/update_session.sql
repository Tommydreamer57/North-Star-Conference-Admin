UPDATE confsessions
SET sessiontype = $1,
title = $2,
speaker = $3,
description = $4
demographic = $5
room = $6
where id = $7
