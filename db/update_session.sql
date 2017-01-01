UPDATE confsessions
SET sessiontype = $1,
title = $2,
speaker = $3,
description = $4
where id = $5
