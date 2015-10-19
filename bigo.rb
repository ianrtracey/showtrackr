require 'benchmark'


def read(n) {
	i = 0
	s = 0
	while (s <= n) {
		i+=1
		s = s + i
	}
}

result = Benchmark.measure do read(100_000)
puts result