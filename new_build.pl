	@ARGV = ('package.json');
	$^I = "~";
	
	while (<>) {
		if (/"version"\s*:\s*"\d+\.\d+\.(\d+)"\s*,\s*$/) {
			$1++;
			s/\.\d+"\s*,\s*$/.$1",\n/;
		}
		print;
	}
